<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function index(): Response
    {
        $news = News::query()
            ->latest()
            ->paginate(15)
            ->through(fn (News $item): array => [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
                'is_published' => $item->is_published,
                'published_at' => $item->published_at?->toDateTimeString(),
            ]);

        return Inertia::render('Admin/News/Index', [
            'news' => $news,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/News/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:news,slug'],
            'content' => ['required', 'string'],
            'image' => ['nullable', 'string', 'max:255'],
            'is_published' => ['required', 'boolean'],
            'published_at' => ['nullable', 'date'],
        ]);

        News::query()->create([
            ...$validated,
            'slug' => $validated['slug'] ?: Str::slug($validated['title']),
            'published_at' => $validated['is_published'] ? ($validated['published_at'] ?? now()) : null,
        ]);

        return redirect()->route('admin.news.index')->with('success', 'Actualité créée avec succès.');
    }

    public function edit(News $news): Response
    {
        return Inertia::render('Admin/News/Edit', [
            'news' => [
                'id' => $news->id,
                'title' => $news->title,
                'slug' => $news->slug,
                'content' => $news->content,
                'image' => $news->image,
                'is_published' => $news->is_published,
                'published_at' => $news->published_at?->toDateTimeString(),
            ],
        ]);
    }

    public function update(Request $request, News $news): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:news,slug,'.$news->id],
            'content' => ['required', 'string'],
            'image' => ['nullable', 'string', 'max:255'],
            'is_published' => ['required', 'boolean'],
            'published_at' => ['nullable', 'date'],
        ]);

        $news->update([
            ...$validated,
            'slug' => $validated['slug'] ?: Str::slug($validated['title']),
            'published_at' => $validated['is_published'] ? ($validated['published_at'] ?? $news->published_at ?? now()) : null,
        ]);

        return redirect()->route('admin.news.index')->with('success', 'Actualité mise à jour.');
    }

    public function destroy(News $news): RedirectResponse
    {
        $news->delete();

        return redirect()->route('admin.news.index')->with('success', 'Actualité supprimée.');
    }
}
