<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Seed the application's products and variants.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'T-shirt Foursquare',
                'slug' => 't-shirt-foursquare',
                'description' => 'T-shirt officiel en coton biologique avec logo Foursquare.',
                'price' => 5000,
                'image' => "/images/image 6.jpg",
                'is_available' => true,
                'variants' => [
                    ['label' => 'S / Noir', 'stock' => 25, 'price' => null],
                    ['label' => 'M / Noir', 'stock' => 40, 'price' => null],
                    ['label' => 'L / Blanc', 'stock' => 30, 'price' => null],
                ],
            ],
            [
                'name' => 'Hoodie Foursquare',
                'slug' => 'hoodie-foursquare',
                'description' => 'Sweat à capuche premium, intérieur molletonné.',
                'price' => 10000,
                'image' => null,
                'is_available' => true,
                'variants' => [
                    ['label' => 'M / Gris', 'stock' => 15, 'price' => 52.90],
                    ['label' => 'L / Gris', 'stock' => 12, 'price' => 52.90],
                    ['label' => 'XL / Noir', 'stock' => 8, 'price' => 54.90],
                ],
            ],
            [
                'name' => 'Casquette Foursquare',
                'slug' => 'casquette-foursquare',
                'description' => 'Casquette réglable avec broderie frontale.',
                'price' => 10000,
                'image' => null,
                'is_available' => true,
                'variants' => [
                    ['label' => 'Taille unique / Noir', 'stock' => 50, 'price' => null],
                    ['label' => 'Taille unique / Bleu', 'stock' => 35, 'price' => null],
                ],
            ],
            [
                'name' => 'Mug Foursquare',
                'slug' => 'mug-foursquare',
                'description' => 'Mug en céramique 330 ml, impression recto-verso.',
                'price' => 15000,
                'image' => null,
                'is_available' => true,
                'variants' => [
                    ['label' => 'Blanc mat', 'stock' => 60, 'price' => null],
                    ['label' => 'Noir brillant', 'stock' => 22, 'price' => 15000],
                ],
            ],
        ];

        foreach ($products as $payload) {
            $variants = $payload['variants'];
            unset($payload['variants']);

            $product = Product::query()->updateOrCreate(
                ['slug' => $payload['slug']],
                $payload,
            );

            $product->variants()->delete();
            $product->variants()->createMany($variants);
        }
    }
}
