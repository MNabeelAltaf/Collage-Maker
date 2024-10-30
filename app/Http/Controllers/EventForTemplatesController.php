<?php

namespace App\Http\Controllers;

use App\Models\EventForOtherTypes;
use App\Models\EventForTemplates;
use Illuminate\Http\Request;

class EventForTemplatesController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'event_type' => 'required|string',
            // 'template_uni' => 'required|string|exists:templates,uni',
            'template_uni' => [
                'string',
                function ($attribute, $value, $fail) use ($request) {
                    if ($request->target_resource === 'template' && !$value) {
                        $fail('The ' . $attribute . ' field is required.');
                    }
                },
                function ($attribute, $value, $fail) {
                    if (!\App\Models\Template::where('uni', $value)->exists()) {
                        $fail('The selected ' . $attribute . ' is invalid.');
                    }
                },
            ],
            'single_image_data_id' => [
                'string',
                function ($attribute, $value, $fail) use ($request) {
                    if ($request->target_resource != 'template' && !$value) {
                        $fail('The ' . $attribute . ' field is required.');
                    }
                },
                function ($attribute, $value, $fail) {
                    if (!\App\Models\SingleImageData::find($value)->exists()) {
                        $fail('The selected ' . $attribute . ' is invalid.');
                    }
                },
            ],
            'ip' => 'required|ip',
            'device_id' => 'required|string',
            'asset_type' => [
                'string',
                function ($attribute, $value, $fail) use ($request) {
                    if ($request->target_resource != 'template' && !$value) {
                        $fail('The ' . $attribute . ' field is required.');
                    }
                },
            ],
        ]);

        if ($request->target_resource === "template")
            $event = EventForTemplates::create($validated);
        else
            $event = EventForOtherTypes::create($validated);

        return response()->json($event, 201);
    }
}
