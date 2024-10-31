<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Premium;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class PremiumController extends Controller
{
    public function index()
    {

        $user = Auth::user();
        $token = $user->createToken(env('APP_NAME' . " Authenticatoin", "Auth Token"))->plainTextToken;
        $title = "Premium";

        $events = Event::all();
        $premium = Premium::all();
        return Inertia::render('Premium/Index', [
            'title' => $title,
            'apiToken' => $token,
            'eventsFromServer' => $events,
            'premium' => $premium,
            'headerOptions' => [
                [
                    "type" => "modal",
                    "title" => "Create",
                    "href" => "manage.category",
                ]
            ],
        ]);
    }


    public function store(Request $request)
    {

        $imagePath = null;
        $voicePath = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = uniqid() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('public/Premium/images', $imageName);
            $imagePath = str_replace('public/', '', $imagePath);
        }

        if ($request->hasFile('voice')) {
            $voice = $request->file('voice');
            $voiceName = uniqid() . '_' . $voice->getClientOriginalName();
            $voicePath = $voice->storeAs('public/Premium/Voices/previous', $voiceName);
            $voicePath = str_replace('public/', '', $voicePath);
        }


        $premium = Premium::create([
            'title' => $request->title,
            'image' => $imagePath,
            'voice' => $voicePath,
            'is_premium' => $request->is_premium,
        ]);

        return response()->json(['status' => 'success', 'data' => $premium], 201);
    }
}
