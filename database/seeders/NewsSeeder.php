<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class NewsSeeder extends Seeder
{
    /**
     * Seed news entries.
     */
    public function run(): void
    {
        $newsItems = [
            [
                'title' => 'Conférence Foursquare 2026 : ouverture des inscriptions',
                'slug' => 'conference-foursquare-2026-ouverture-inscriptions',
                'content' => "Les inscriptions pour la conférence Foursquare 2026 sont désormais ouvertes. Rejoignez des intervenants internationaux et des ateliers pratiques.",
                'image' => '/images/Convention 2025.jpg',
                'is_published' => true,
                'published_at' => Carbon::now()->subDays(14),
            ],
            [
                'title' => 'Lancement du programme bénévoles',
                'slug' => 'lancement-programme-benevoles',
                'content' => "Nous lançons un nouveau programme pour les bénévoles souhaitant contribuer à l'organisation des événements Foursquare à travers la France.",
                'image' => '/images/Programme 1.jpg',
                'is_published' => true,
                'published_at' => Carbon::now()->subDays(7),
            ],
            [
                'title' => 'Retour en images sur la dernière édition',
                'slug' => 'retour-en-images-derniere-edition',
                'content' => "Découvrez les temps forts de la dernière édition : conférences, networking et innovations présentées par nos partenaires.",
                'image' => '/images/Programme 2.jpg',
                'is_published' => true,
                'published_at' => Carbon::now()->subDays(2),
            ],
            [
                'title' => 'Annonce des prochains ateliers thématiques',
                'slug' => 'annonce-prochains-ateliers-thematiques',
                'content' => "La programmation des prochains ateliers thématiques sera dévoilée prochainement. Restez connectés pour ne rien manquer.",
                'image' => null,
                'is_published' => false,
                'published_at' => null,
            ],
        ];

        foreach ($newsItems as $payload) {
            News::query()->updateOrCreate(
                ['slug' => $payload['slug']],
                $payload,
            );
        }
    }
}
