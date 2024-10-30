<?php

namespace App\Http\Controllers\v2;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TemplateResource;
use App\Models\Template;
use Illuminate\Support\Facades\Redis;

class TemplateController extends Controller
{
    function getTemplatesFronASingleCategory(Request $request, $category_name)
    {
        // $cacheKey = "templates_for_category_{$category_name}_page_{$request->page}";
        // $cachedResponse = Redis::get($cacheKey);
        // if ($cachedResponse)
        //     return response()->json(json_decode($cachedResponse, true));
        // $response = [
        //     'name' => $category_name,
        //     'templates' => TemplateResource::collection(Category::where('name', $category_name)
        //         ->get()[0]->templates()->paginate(12))->toArray($request)
        // ];
        // Redis::setex($cacheKey, 3600 * 24, json_encode($response)); // Cache for 1 day
        // return response()->json($response);


        if ($category_name === "All Categories")
            $results = TemplateResource::collection(Template::orderBy('id', 'desc')->paginate(12))->toArray($request);
        else
            $results = TemplateResource::collection(
                Category::where('name', $category_name)
                    ->first()
                    ->templates()
                    ->when(isset($request->build), function ($query) {
                        // $query->take(5);
                    }, function ($query) {
                        $query->where('created_at', '<', '2024-09-03');
                    })
                    ->paginate(12)
            )->toArray($request);
        // $results = TemplateResource::collection(Category::where('name', $category_name)
        //     ->get()[0]->templates()->paginate(12))->toArray($request);
        shuffle($results);

        return response()->json([
            'name' => $category_name,
            'templates' => $results,
        ]);
    }

    function getPaginatedTemplates(Request $request)
    {
        $response = [];

        // Fetch categories with templates
        $categories = Category::with(['templates' => function ($query) use ($request) {
            if (isset($request->build))
                $query->take(5);
            else
                $query->where('created_at', '<', '2024-09-03')
                    ->take(5);
        }])->has('templates')->get();

        // Separate Halloween category from others
        $halloweenCategory = null;
        $otherCategories = [];

        foreach ($categories as $category) {
            if ($category['name'] === 'Halloween') {
                $halloweenCategory = [
                    'name' => $category['name'],
                    'templates' => TemplateResource::collection($category['templates'])->toArray($request)
                ];
            } else if (count($category['templates']) > 0) {
                $otherCategories[] = [
                    'name' => $category['name'],
                    'templates' => TemplateResource::collection($category['templates'])->toArray($request)
                ];
            }
        }

        // Add Halloween category to the top of the response if it exists
        if ($halloweenCategory) {
            $response[] = $halloweenCategory;
        }

        // Merge other categories
        $response = array_merge($response, $otherCategories);
        return response()->json(['templates' => $response]);
    }
}
