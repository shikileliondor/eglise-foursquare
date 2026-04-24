<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    /**
     * Display all available products for the shop page.
     */
    public function index(): Response
    {
        $products = Product::query()
            ->available()
            ->with('variants')
            ->latest()
            ->get()
            ->map(fn (Product $product): array => [
                'id' => $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'base_price' => (float) $product->price,
                'image_url' => $product->image_url,
                'variants' => $product->variants->map(fn ($variant): array => [
                    'id' => $variant->id,
                    'label' => $variant->label,
                    'stock' => $variant->stock,
                    'price' => $variant->price !== null ? (float) $variant->price : null,
                ]),
            ]);

        return Inertia::render('Shop/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Display a single product and its variants.
     */
    public function show(string $slug): Response
    {
        $product = Product::query()
            ->available()
            ->with('variants')
            ->where('slug', $slug)
            ->firstOrFail();

        $otherProducts = Product::query()
            ->available()
            ->whereKeyNot($product->id)
            ->latest()
            ->take(3)
            ->get()
            ->map(fn (Product $item): array => [
                'id' => $item->id,
                'name' => $item->name,
                'slug' => $item->slug,
                'description' => $item->description,
                'base_price' => (float) $item->price,
                'image_url' => $item->image_url,
            ]);

        $whatsAppPhone = preg_replace('/\D+/', '', (string) env('WHATSAPP_PHONE', '2252720213520'));

        return Inertia::render('Shop/Show', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'base_price' => (float) $product->price,
                'image_url' => $product->image_url,
                'variants' => $product->variants->map(fn ($variant): array => [
                    'id' => $variant->id,
                    'label' => $variant->label,
                    'stock' => $variant->stock,
                    'price' => $variant->price !== null ? (float) $variant->price : null,
                ]),
            ],
            'otherProducts' => $otherProducts,
            'whatsappPhone' => $whatsAppPhone,
        ]);
    }
}
