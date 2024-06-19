<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stories extends Model
{
    use HasFactory;
    protected $table = 'stories';
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
        return $this->belongsToMany(Type::class, 'story_type');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'story_tag');
    }

    public function poster()
    {
        return $this->belongsTo(User::class, 'poster');
    }
}
