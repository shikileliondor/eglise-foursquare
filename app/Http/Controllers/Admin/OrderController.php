<?php

namespace App\Http\Controllers\Admin;

use App\Enums\OrderStatus;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    public function index(): Response
    {
        $orders = Order::query()
            ->withCount('items')
            ->latest()
            ->paginate(20)
            ->through(fn (Order $order): array => [
                'id' => $order->id,
                'customer_name' => $order->customer_name,
                'customer_phone' => $order->customer_phone,
                'status' => $order->status->value,
                'items_count' => $order->items_count,
                'created_at' => $order->created_at?->toDateTimeString(),
            ]);

        return Inertia::render('Admin/Orders/Index', [
            'orders' => $orders,
            'statuses' => array_map(fn (OrderStatus $status): string => $status->value, OrderStatus::cases()),
        ]);
    }

    public function show(Order $order): Response
    {
        $order->load(['items.product', 'items.variant']);

        return Inertia::render('Admin/Orders/Show', [
            'order' => [
                'id' => $order->id,
                'customer_name' => $order->customer_name,
                'customer_phone' => $order->customer_phone,
                'status' => $order->status->value,
                'whatsapp_message' => $order->whatsapp_message,
                'created_at' => $order->created_at?->toDateTimeString(),
                'items' => $order->items->map(fn ($item): array => [
                    'id' => $item->id,
                    'product' => $item->product?->name,
                    'variant' => $item->variant?->label,
                    'quantity' => $item->quantity,
                    'unit_price' => (float) $item->unit_price,
                    'line_total' => (float) $item->unit_price * $item->quantity,
                ]),
            ],
            'statuses' => array_map(fn (OrderStatus $status): string => $status->value, OrderStatus::cases()),
        ]);
    }

    public function updateStatus(Request $request, Order $order): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'string'],
        ]);

        $status = OrderStatus::tryFrom($validated['status']);

        abort_unless($status, 422, 'Statut invalide.');

        $order->update(['status' => $status]);

        return redirect()->route('admin.orders.show', $order)->with('success', 'Statut mis à jour.');
    }
}
