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
                'photo_urls' => $this->extractPhotoUrls($news),
                'published_at' => $news->published_at?->toDateTimeString(),
            ],
        ]);
    }

    /**
     * Build a list of photos from the featured image and content image URLs.
     *
     * @return list<string>
     */
    private function extractPhotoUrls(News $news): array
    {
        $images = [];

        if ($news->image_url) {
            $images[] = $news->image_url;
        }

        preg_match_all('/https?:\\/\\/[^\\s"\'<>]+\\.(?:jpg|jpeg|png|gif|webp|avif)/i', $news->content, $matches);

        return array_values(array_unique([
            ...$images,
            ...($matches[0] ?? []),
        ]));
    }
}
