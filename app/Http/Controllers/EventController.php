<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    public function testEvents(Request $request)
    {
        $categoriesBasedOnEvents = getCategoriseBasedOnEvents();
        return response()->json($categoriesBasedOnEvents);
    }

    public function setCategoriesForEvent(Request $request, $id)
    {

        $categories = $request->input('categories');
        if ($categories) {
            $categories = json_decode($categories, true);
            $event = Event::find($id);
            $event->categories()->sync($categories);
            return response()->json(['cat' => $categories]);
        } else {
            return response()->json(['message' => ""]);
        }
    }
    public function getCategoriesForEvent(Request $request, $id)
    {
        // $event = Event::find(15);
        // $categoryIds = [16, 17, 18];
        // $event->categories()->attach($categoryIds);

        $event = Event::find($id);
        $categories = $event->categories;
        return response()->json([
            'categories' => $categories,
            'event' => $event['title'],
        ]);
    }
    public function create(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'from' => 'required|string',
            'to' => 'required|string',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|boolean',
        ]);

        // Create the event in the database
        $event = Event::create([
            'from' => $validatedData['from'],
            'to' => $validatedData['to'],
            'title' => $validatedData['title'],
            'description' => $validatedData['description'] ?? null,
            'status' => $validatedData['status'] ?? 1,
        ]);

        // Return a response or redirect
        return response()->json(['message' => 'Event created successfully', 'event' => $event], 201);
    }
    function index(Request $request)
    {
        $user = Auth::user();
        $token = $user->createToken(env('APP_NAME' . " Authenticatoin", "Auth Token"))->plainTextToken;
        $title = "Manage Events";
        $events = Event::all();
        $categories = Category::all();
        return Inertia::render('Event/Index', [
            'title' => $title,
            'apiToken' => $token,
            'eventsFromServer' => $events,
            'categories' => $categories,
            'headerOptions' => [
                [
                    "type" => "modal",
                    "title" => "Create",
                    "href" => "manage.category",
                ]
            ],
        ]);
    }




}
