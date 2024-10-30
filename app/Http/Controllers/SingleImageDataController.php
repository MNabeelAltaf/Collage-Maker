<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\SingleImageDataCollection;
use App\Http\Resources\SingleImageDataResource;
use App\Http\Resources\SizeResource;
use App\Http\Resources\TemplateResource;
use App\Models\Category;
use App\Models\SingleImageData;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SingleImageDataController extends Controller
{

    function delete(Request $request, $uni)
    {
        SingleImageData::where("id", $uni)->delete();
        return response()->json(["message" => "Asset has been deleted"]);
    }
    function getAssetsForSingleCategory(Request $request, $type, $uni)
    {
        $categories = (new CategoryCollection(Category::where('show', 1)->orderByDesc('id')->get()))->toArray($request);
        return Inertia::render('Asset/Create', [
            'title' => "Add Asset",
            'categories' => $categories,
            'headerOptions' => [
                [
                    "type" => "action",
                    "title" => "Create",
                    "href" => "create.new.template.view",
                ],
            ],
        ]);
    }
    function assetsCreate(Request $request)
    {
        $categories = (new CategoryCollection(Category::where('show', 1)->orderByDesc('id')->get()))->toArray($request);
        return Inertia::render('Asset/Create', [
            'title' => "Add Asset",
            'categories' => $categories,
            'headerOptions' => [
                [
                    "type" => "action",
                    "title" => "Create",
                    "href" => "create.new.template.view",
                ],
            ],
        ]);
    }

    function store(Request $request)
    {
        $request->validate([
            'type' => 'required|string',
            // 'category_id' => 'required|integer',
            'images' => 'required',
            'category_name' => 'required|string',
            'category_id' => 'required|string',
        ]);
        $storagePath = $request->type . "/" . $request->category_id;

        foreach ($request->images as $index => $item) {
            $image = $item['image'];
            $name = random_int(1, 999999) . round(microtime(true)) . $index . '.' . $image->extension();
            $sourcePath = Storage::disk("public")->putFileAs($storagePath, $image, $name);
            $thumbnailPath = $storagePath . "/" . random_int(1, 999999) . round(microtime(true)) . $index . 'thumb.webp';

            // $input_path, $output_path, $target_width, $target_height, $maintain_aspect_ratio = true, $extension
            // return Storage::disk('public')->path($sourcePath);
            resize_and_crop(Storage::disk('public')->path($sourcePath), Storage::disk('public')->path($thumbnailPath), 150, 150, true, $image->extension());
            $asset = SingleImageData::create([
                "image" => $storagePath . "/" . $name,
                "thumbnail" => $thumbnailPath,
                "type" => $request->type,
                "category_id" => $request->category_id,
                "user_id" => $request->user_id,
            ]);
        }


        return response()->json([
            'message' => $request->type . " added",
            'data' => $asset,
        ]);
    }

    function index(Request $request)
    {
        $user = Auth::user();
        $token = $user->createToken(env('APP_NAME' . " Authenticatoin", "Auth Token"))->plainTextToken;
        $temp = ["id" => "all", "name" => "All Categories"];
        $categories = (new CategoryCollection(Category::where('show', 1)->orderByDesc('id')->get()))->toArray($request);
        $assets = SingleImageDataResource::collection(SingleImageData::orderBy('id', 'desc')->get())->toArray($request);
        array_unshift($categories, $temp);
        return Inertia::render('Asset/Index', [
            'title' => "Manage Assets",
            'assets' => $assets,
            'categories' => $categories,
            'token' => $token,
            'headerOptions' => [
                [
                    "type" => "link",
                    "title" => "Create",
                    "href" => "assets.create.view",
                ],
            ],
        ]);
    }

    function downloadTest(Request $request)
    {
        $file = SingleImageData::find(21);
        return Storage::disk('local')->download($file->image);
    }

    function testSave(Request $request)
    {
        return response()->json(['message' => count($request->file('file'))]);
        if ($request->hasFile("file")) {
            $cv = Storage::disk("local")->put('/', $request->file('file'));
        }
        SingleImageData::create([
            'image' => $cv,
            'type' => "test",
            'thumbnail' => $cv,
        ]);
        return response()->json(['message' => "Response successful"]);
    }
}
