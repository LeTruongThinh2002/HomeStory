<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\TryCatch;
use Ramsey\Uuid\Type\Integer;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Page>
 */
class PageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $storyNumber = \App\Models\Story::inRandomOrder()->first()->id;
        // $nextPageNumber = \App\Models\Page::where('story_id', $storyNumber)->orderByDesc('page_number')->first()->page_number ?? 0;
        return [
            'story_id' => $storyNumber,
            'content' => $this->faker->paragraph,
            'page_number' => $this->faker->numberBetween(1, 100),
            'created_at' => now(),
            'updated_at' => now(),
        ];

    }

}
