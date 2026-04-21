<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    /**
     * Display published news.
     */
    public function index(): Response
    {
        $news = News::query()
            ->published()
            ->latest('published_at')
            ->paginate(12)
            ->through(fn (News $item): array => [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'excerpt' => str($item->content)->limit(180)->toString(),
                'image_url' => $item->image_url,
                'published_at' => $item->published_at?->toDateTimeString(),
            ]);

        return Inertia::render('News/Index', [
            'news' => $news,
        ]);
    }

    /**
     * Display a single published news entry.
     */
    public function show(string $slug): Response
    {
        $news = News::query()
            ->published()
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('News/Show', [
            'news' => [
                'id' => $news->id,
                'title' => $news->title,
                'slug' => $news->slug,
                'content' => $news->content,
                'image_url' => $news->image_url,
                'published_at' => $news->published_at?->toDateTimeString(),
            ],
        ]);
    }
}
