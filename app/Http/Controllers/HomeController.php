<?php

namespace App\Http\Controllers;

use App\Models\Convention;
use App\Models\News;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the homepage with featured content for the storefront.
     */
    public function index(): Response
    {
        $products = Product::query()
            ->available()
            ->with('variants')
            ->latest()
            ->limit(6)
            ->get()
            ->map(fn (Product $product): array => [
                'id' => $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'base_price' => (float) $product->price,
                'image_url' => $product->image_url,
                'variants_count' => $product->variants->count(),
            ]);

        $latestNews = News::query()
            ->published()
            ->latest('published_at')
            ->limit(3)
            ->get()
            ->map(fn (News $news): array => [
                'id' => $news->id,
                'title' => $news->title,
                'slug' => $news->slug,
                'image_url' => $news->image_url,
                'published_at' => $news->published_at?->toDateTimeString(),
            ]);

        $convention = Convention::query()->first();

        return Inertia::render('Home/Index', [
            'products' => $products,
            'latestNews' => $latestNews,
            'convention' => $convention ? [
                'id' => $convention->id,
                'title' => $convention->title,
                'theme' => $convention->theme,
                'location' => $convention->location,
                'year' => $convention->year,
                'date_start' => $convention->date_start?->toDateString(),
                'date_end' => $convention->date_end?->toDateString(),
                'poster' => $convention->poster,
            ] : null,
        ]);
    }
}
