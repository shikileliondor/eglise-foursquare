<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Convention;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ConventionController extends Controller
{
    public function edit(): Response
    {
        $convention = Convention::query()->first();

        return Inertia::render('Admin/Convention/Edit', [
            'convention' => $convention ? [
                'id' => $convention->id,
                'title' => $convention->title,
                'theme' => $convention->theme,
                'location' => $convention->location,
                'date_start' => $convention->date_start?->toDateString(),
                'date_end' => $convention->date_end?->toDateString(),
                'description' => $convention->description,
                'poster' => $convention->poster,
                'year' => $convention->year,
            ] : null,
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'theme' => ['required', 'string', 'max:255'],
            'location' => ['required', 'string', 'max:255'],
            'date_start' => ['required', 'date'],
            'date_end' => ['required', 'date', 'after_or_equal:date_start'],
            'description' => ['required', 'string'],
            'poster' => ['nullable', 'string', 'max:255'],
            'year' => ['required', 'integer', 'digits:4'],
        ]);

        $convention = Convention::query()->first();

        if ($convention) {
            $convention->update($validated);
        } else {
            Convention::query()->create($validated);
        }

        return redirect()->route('admin.convention.edit')->with('success', 'Convention mise à jour.');
    }
}
