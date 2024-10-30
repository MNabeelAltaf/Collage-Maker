<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\Controller;
use App\Models\Premium;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PremiumController extends Controller
{
    public function getVoiceImages()
    {
        $premiums = Premium::all()->map(function ($premium) {
            return [
                'id' => $premium->id,
                'title' => $premium->title,
                'image' => url(Storage::url($premium->image)),
                'voice' => url(Storage::url($premium->voice)),
            ];
        });
        return response()->json($premiums);
    }
}
