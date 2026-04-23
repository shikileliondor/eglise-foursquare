<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class IntroController extends Controller
{
    /**
     * Display the intro animation page once per session.
     */
    public function index(): Response
    {
        session(['intro_seen' => true]);

        return Inertia::render('Intro/Index');
    }
}
