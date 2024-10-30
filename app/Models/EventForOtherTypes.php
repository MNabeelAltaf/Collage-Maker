<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventForOtherTypes extends Model
{
    use HasFactory;

    protected $table = 'event_for_other_types';

    // Define fillable attributes for mass assignment
    protected $fillable = [
        'event_type', // type of the event
        'asset_type',
        'single_image_data_id',
        'ip',
        'device_id'
    ];
}
