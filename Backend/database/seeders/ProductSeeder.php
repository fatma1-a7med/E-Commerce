<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'title' => 'Sample Product 1',
            'image' => 'sample_image_1.jpg',
            'price' => 19.99,
            'details' => 'Sample details 1',
        ]);

        Product::create([
            'title' => 'Sample Product 2',
            'image' => 'sample_image_2.jpg',
            'price' => 29.99,
            'details' => 'Sample details 2',
        ]);

        Product::create([
            'title' => 'Sample Product 3',
            'image' => 'sample_image_3.jpg',
            'price' => 39.99,
            'details' => 'Sample details 3',
        ]);

        Product::create([
            'title' => 'Sample Product 4',
            'image' => 'sample_image_4.jpg',
            'price' => 49.99,
            'details' => 'Sample details 4',
        ]);

        Product::create([
            'title' => 'Sample Product 5',
            'image' => 'sample_image_5.jpg',
            'price' => 59.99,
            'details' => 'Sample details 5',
        ]);
    }
}
