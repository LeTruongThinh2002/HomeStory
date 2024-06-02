<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;
    protected $table = 'pages';

    protected $fillable = [
        'story_id',
        'page_number',
        'content',
    ];

    public function story()
    {
        return $this->belongsTo(Stories::class);
    }
}

