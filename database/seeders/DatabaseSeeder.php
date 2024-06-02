<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Tag;
use App\Models\Type;
use App\Models\Page;
use App\Models\Stories;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password'=> bcrypt('123.321A'),
        //     'email_verified_at' => time()
        // ]);

        User::factory(10)->create();
        Stories::factory(10)->create();
        Tag::factory(10)->create();
        Type::factory(10)->create();
        Page::factory(50)->create();
    }
}
