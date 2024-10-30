<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'uni',
        'type',
        'show',
        'order',
        'thumbnail',
    ];

    public function templates()
    {
        return $this->hasMany(Template::class, 'category_id', 'uni');
    }

    public function single_image_data()
    {
        return $this->hasMany(SingleImageData::class, "category_id", 'uni');
    }

    public function events()
    {
        return $this->belongsToMany(Event::class, 'category_event', 'category_id', 'event_id');
    }
}
