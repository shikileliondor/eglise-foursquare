<?php

namespace App\Http\Controllers;

use App\Models\Convention;
use Inertia\Inertia;
use Inertia\Response;

class ConventionController extends Controller
{
    /**
     * Display the unique convention entry.
     */
    public function index(): Response
    {
        $convention = Convention::query()->first();

        return Inertia::render('Convention/Index', [
            'convention' => $convention ? [
                'id' => $convention->id,
                'title' => $convention->title,
                'theme' => $convention->theme,
                'location' => $convention->location,
                'description' => $convention->description,
                'date_start' => $convention->date_start?->toDateString(),
                'date_end' => $convention->date_end?->toDateString(),
                'year' => $convention->year,
                'poster' => $convention->poster,
            ] : null,
        ]);
    }
}
