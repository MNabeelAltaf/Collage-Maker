<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Premium extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'voice',
    ];
    protected $table = 'premium'; // Optional, only if table name differs from the model name
}
