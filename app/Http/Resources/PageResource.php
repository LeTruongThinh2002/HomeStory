<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "stories_id" => $this->stories_id,
            "page_number" => $this->page_number,
            "title" => $this->stories['title'],
            "image" => $this->stories['image'],
            "content" => $this->content,
            "created_at" => (new Carbon($this->created_at))->format('Y-m-d H:i:s'),
            "updated_at" => (new Carbon($this->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}
