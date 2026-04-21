<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class OrderController extends Controller
{
    /**
     * Persist a new order and return a WhatsApp redirection link.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'customer_name' => ['required', 'string', 'max:255'],
            'customer_phone' => ['required', 'string', 'max:30'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'integer', 'exists:products,id'],
            'items.*.variant_id' => ['nullable', 'integer', 'exists:product_variants,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
        ]);

        $itemsByProduct = collect($validated['items'])->groupBy('product_id');

        $products = Product::query()
            ->available()
            ->with('variants')
            ->whereIn('id', $itemsByProduct->keys())
            ->get()
            ->keyBy('id');

        if ($products->count() !== $itemsByProduct->count()) {
            throw ValidationException::withMessages([
                'items' => 'Un ou plusieurs produits ne sont pas disponibles.',
            ]);
        }

        $lineItems = [];
        $total = 0.0;

        foreach ($validated['items'] as $item) {
            $product = $products->get($item['product_id']);
            $variant = null;

            if (! empty($item['variant_id'])) {
                $variant = $product->variants->firstWhere('id', $item['variant_id']);

                if (! $variant) {
                    throw ValidationException::withMessages([
                        'items' => "La variante {$item['variant_id']} n'appartient pas au produit {$product->id}.",
                    ]);
                }
            }

            // Prix sécurisé côté backend: la variante surcharge le prix produit quand elle existe.
            $unitPrice = (float) ($variant?->price ?? $product->price);
            $quantity = (int) $item['quantity'];
            $lineTotal = $unitPrice * $quantity;
            $total += $lineTotal;

            $lineItems[] = [
                'product_id' => $product->id,
                'variant_id' => $variant?->id,
                'quantity' => $quantity,
                'unit_price' => $unitPrice,
                'product_name' => $product->name,
                'variant_label' => $variant?->label,
                'line_total' => $lineTotal,
            ];
        }

        $order = DB::transaction(function () use ($validated, $lineItems): Order {
            $order = Order::query()->create([
                'customer_name' => $validated['customer_name'],
                'customer_phone' => $validated['customer_phone'],
                'whatsapp_message' => '',
            ]);

            $order->items()->createMany(collect($lineItems)->map(fn (array $line): array => [
                'product_id' => $line['product_id'],
                'variant_id' => $line['variant_id'],
                'quantity' => $line['quantity'],
                'unit_price' => $line['unit_price'],
            ])->all());

            return $order;
        });

        $whatsAppMessage = $this->buildWhatsAppMessage(
            orderId: $order->id,
            customerName: $validated['customer_name'],
            customerPhone: $validated['customer_phone'],
            items: $lineItems,
            total: $total,
        );

        $order->update(['whatsapp_message' => $whatsAppMessage]);

        $phone = preg_replace('/\D+/', '', (string) env('WHATSAPP_PHONE', ''));

        if (blank($phone)) {
            throw ValidationException::withMessages([
                'whatsapp' => 'Le numéro WhatsApp marchand n\'est pas configuré.',
            ]);
        }

        return response()->json([
            'order_id' => $order->id,
            'whatsapp_url' => 'https://wa.me/'.$phone.'?text='.urlencode($whatsAppMessage),
        ]);
    }

    /**
     * Build a human-readable WhatsApp message for manual confirmation.
     *
     * @param  array<int, array<string, mixed>>  $items
     */
    private function buildWhatsAppMessage(int $orderId, string $customerName, string $customerPhone, array $items, float $total): string
    {
        $lines = [
            "Bonjour, je souhaite confirmer la commande #{$orderId}.",
            "Client: {$customerName}",
            "Téléphone: {$customerPhone}",
            '',
            'Détails:',
        ];

        foreach ($items as $item) {
            $label = $item['product_name'];

            if (! empty($item['variant_label'])) {
                $label .= ' - '.$item['variant_label'];
            }

            $lines[] = sprintf(
                '- %s x%d = %.2f',
                $label,
                $item['quantity'],
                $item['line_total']
            );
        }

        $lines[] = '';
        $lines[] = sprintf('Total: %.2f', $total);

        return implode("\n", $lines);
    }
}
