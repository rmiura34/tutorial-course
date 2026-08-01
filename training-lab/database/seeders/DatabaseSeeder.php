<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Company::query()->insert([
            ['name' => 'Sakura Systems', 'website' => 'https://sakura.example', 'source_page' => 1, 'status' => 'active'],
            ['name' => 'Harbor Data', 'website' => 'https://harbor.example', 'source_page' => 1, 'status' => 'active'],
            ['name' => 'Kite Works', 'website' => 'https://kite.example', 'source_page' => 2, 'status' => 'paused'],
        ]);
    }
}
