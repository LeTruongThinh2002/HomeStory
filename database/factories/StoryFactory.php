<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\story>
 */
class StoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->text(190),
            'image' => $this->faker->imageUrl(),
            'author' => $this->faker->name,
            'poster' => \App\Models\User::inRandomOrder()->first()->name,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
