<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventForTemplates extends Model
{
    use HasFactory;

    protected $table = 'event_for_templates';

    // Define fillable attributes for mass assignment
    protected $fillable = [
        'event_type',
        'template_uni',
        'ip',
        'device_id'
    ];

    // Define any relationships if needed
    // For example, if EventForTemplate belongs to a Template
    public function template()
    {
        return $this->belongsTo(Template::class);
    }
}
