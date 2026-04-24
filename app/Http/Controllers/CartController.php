<?php

namespace App\Http\Controllers;

use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class CartController extends Controller
{
    /**
     * Display current cart content.
     */
    public function show(Request $request): JsonResponse
    {
        $cart = $this->resolveCart($request);

        return response()->json($this->presentCart($cart));
    }

    /**
     * Add or increment a cart line.
     */
    public function store(StoreCartItemRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $product = Product::query()
            ->available()
            ->with('variants')
            ->find($validated['product_id']);

        if (! $product) {
            throw ValidationException::withMessages([
                'product_id' => 'Ce produit n\'est pas disponible.',
            ]);
        }

        $variantId = $validated['variant_id'] ?? null;

        if ($variantId !== null && ! $product->variants->contains('id', $variantId)) {
            throw ValidationException::withMessages([
                'variant_id' => 'La variante sélectionnée ne correspond pas à ce produit.',
            ]);
        }

        $cart = $this->resolveCart($request, true);

        DB::transaction(function () use ($cart, $validated, $variantId): void {
            $item = $cart->items()
                ->where('product_id', $validated['product_id'])
                ->where('variant_id', $variantId)
                ->first();

            if ($item) {
                $item->update([
                    'quantity' => $item->quantity + (int) $validated['quantity'],
                ]);

                return;
            }

            $cart->items()->create([
                'product_id' => $validated['product_id'],
                'variant_id' => $variantId,
                'quantity' => (int) $validated['quantity'],
            ]);
        });

        $cart->load(['items.product', 'items.variant']);

        return response()->json($this->presentCart($cart), 201);
    }

    /**
     * Update quantity for a cart line.
     */
    public function update(UpdateCartItemRequest $request, CartItem $cartItem): JsonResponse
    {
        $cart = $this->resolveCart($request);

        if ($cartItem->cart_id !== $cart->id) {
            abort(404);
        }

        $cartItem->update([
            'quantity' => (int) $request->validated('quantity'),
        ]);

        $cart->load(['items.product', 'items.variant']);

        return response()->json($this->presentCart($cart));
    }

    /**
     * Remove one cart line.
     */
    public function destroy(Request $request, CartItem $cartItem): JsonResponse
    {
        $cart = $this->resolveCart($request);

        if ($cartItem->cart_id !== $cart->id) {
            abort(404);
        }

        $cartItem->delete();
        $cart->load(['items.product', 'items.variant']);

        return response()->json($this->presentCart($cart));
    }

    /**
     * Remove every line from cart.
     */
    public function clear(Request $request): JsonResponse
    {
        $cart = $this->resolveCart($request);
        $cart->items()->delete();
        $cart->load(['items.product', 'items.variant']);

        return response()->json($this->presentCart($cart));
    }

    private function resolveCart(Request $request, bool $create = false): Cart
    {
        if (! $request->hasSession()) {
            $request->setLaravelSession(app('session')->driver());
        }

        $sessionId = $request->session()->getId();

        $query = Cart::query()
            ->where('session_id', $sessionId)
            ->when($request->user(), fn ($builder) => $builder->where('user_id', $request->user()->id))
            ->with(['items.product', 'items.variant']);

        if ($create) {
            return $query->firstOrCreate([
                'session_id' => $sessionId,
                'user_id' => $request->user()?->id,
            ]);
        }

        return $query->first()
            ?? new Cart(['session_id' => $sessionId, 'user_id' => $request->user()?->id]);
    }

    /**
     * @return array<string, mixed>
     */
    private function presentCart(Cart $cart): array
    {
        $items = $cart->items->map(function (CartItem $item): array {
            $unitPrice = (float) ($item->variant?->price ?? $item->product->price);

            return [
                'id' => $item->id,
                'product_id' => $item->product_id,
                'variant_id' => $item->variant_id,
                'quantity' => $item->quantity,
                'name' => $item->product->name,
                'brand' => $item->product->name,
                'variant_label' => $item->variant?->label,
                'unit_price' => $unitPrice,
                'line_total' => $unitPrice * $item->quantity,
            ];
        })->values();

        return [
            'id' => $cart->id,
            'items' => $items,
            'count' => $items->sum('quantity'),
            'total' => $items->sum('line_total'),
        ];
    }
}
