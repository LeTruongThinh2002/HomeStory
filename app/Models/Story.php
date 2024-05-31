<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;
    protected $table = 'story';
    protected $fillable = [
        'title',
        'description',
        'image',
        'author',
        'poster',
    ];

    public function pages()
    {
        return $this->hasMany(Page::class);
    }

    public function types()
    {
        return $this->belongsToMany(Type::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
