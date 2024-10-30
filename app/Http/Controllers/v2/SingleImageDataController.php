<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\SingleImageDataCollection;
use App\Http\Resources\SingleImageDataResource;
use App\Http\Resources\SizeResource;
use App\Http\Resources\TemplateResource;
use App\Models\Category;
use App\Models\SingleImageData;
use App\Models\Size;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SingleImageDataController extends Controller
{
    function getAssetsForSingleCategory(Request $request, $type, $category_name)
    {
        if ($category_name == "All Categories")
            $category_name = "";
        $result = DB::table('single_image_data')
            ->join('categories', 'categories.uni', '=', 'single_image_data.category_id')
            ->where('categories.name', 'like', '%' . $category_name . '%')
            ->select('categories.name', 'single_image_data.*')
            ->orderBy("id", "desc")
            ->paginate(12);
        $images = [];
        foreach ($result as $res) {
            $images[] = SingleImageDataResource::make($res)->toArray($request);
        }
        return response()->json([
            "name" => $category_name,
            "images" => $images
        ]);

    }
    function getSingleImageContent(Request $request, $type)
    {
        $target = $type;
        $response = [];
        if ($type == "sticker")
            $response[] = ['uni' => "0", "name" => "Image", ucfirst($type) => []];
        if ($type === "all")
            return SingleImageDataResource::collection(SingleImageData::all());
        if ($type === "sizes")
            return SizeResource::collection(Size::all());
        else {
            foreach (Category::with(['single_image_data' => function ($query) use ($type) {
                $query->where('type', $type);
            }
            ])->orderBy('id', 'desc')->get() as $category) {
                if (count($category['single_image_data']) > 0) {
                    $assets = SingleImageDataResource::collection($category['single_image_data'])->toArray($request);
                    shuffle($assets);
                    if ($type === "background") {
                        $targetIndex = array_search(701, array_column($assets, 'uni'));
                        if ($targetIndex !== false && $targetIndex !== 0) {
                            $objectAtZero = $assets[0];
                            $assets[0] = $assets[$targetIndex];
                            $assets[$targetIndex] = $objectAtZero;
                        }
                        array_unshift($assets, [
                            "uni" => -1,
                            "image" => "https://collagemaker.rosyappsstudio.com/Group%209015.png",
                            "thumbnail" => "https://collagemaker.rosyappsstudio.com/Group%209015.png",
                            "type" => "Background"
                        ]);
                    }
                    // sort($assets);
                    $response[] = [
                        'name' => $category['name'],
                        'uni' => $category['uni'],
                        ucfirst($type) => $assets,
                    ];
                }
            }
            return response()->json(['assets' => $response]);
            // return SingleImageDataResource::collection(SingleImageData::where("type", $type)->get())->toArray($request);
        }

    }
}
