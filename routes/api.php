<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\Premiumcontroller;
use App\Http\Controllers\EventForTemplatesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SingleImageDataController;
use App\Http\Controllers\TemplateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::get('/test', function (Request $request) {
//   return "templates_with_categories_page_{$request->page}";
// });

Route::get('/events/upcoming', [EventController::class, 'testEvents']);

Route::post('/save', [SingleImageDataController::class, 'testSave'])->name("test.save");

Route::post('/login', [ProfileController::class, 'login'])->name("api.login");

Route::get('/file', [SingleImageDataController::class, 'downloadTest'])->name("download.test");

Route::middleware('auth:sanctum')->post('/templates', [TemplateController::class, 'store'])->name("save.template");

Route::middleware('auth:sanctum')->delete('/templates/{uni}', [TemplateController::class, 'delete'])->name("delete.template");

Route::post('/assets', [SingleImageDataController::class, 'store'])->name("save.single.asset");

Route::middleware('auth:sanctum')->delete('/assets/{uni}', [SingleImageDataController::class, 'delete'])->name("delete.single.image.data");

Route::middleware('auth:sanctum')->delete('/assets/{uni}', [SingleImageDataController::class, 'delete'])->name("delete.single.image.data");

Route::middleware('auth:sanctum')->post('/templates/image/{uni}', [TemplateController::class, 'updateImage'])->name("update.template.image");

Route::post('/actions-events', [EventForTemplatesController::class, 'store'])->name("add.new.event");

Route::post('/premium', [Premiumcontroller::class, 'store'])->name('add.premium');


// Route::get('/events/categories/{id}', [EventController::class, 'getCategoriesForEvent'])->name("get.categories.for.event");
Route::get('/events/categories/{id}', [EventController::class, 'getCategoriesForEvent'])->name("get.categories.for.events");

Route::post('/events/categories/{id}', [EventController::class, 'setCategoriesForEvent'])->name("get.categories.for.event");

Route::get('/templates/{uni}', [TemplateController::class, 'read'])->name("get.template");

Route::get('/templates', [TemplateController::class, 'readAll'])->name("get.all.template");

// Route::get('/templates/update/frameCount', [TemplateController::class, 'updateFrameCount'])->name("get.all.template");

Route::post('/category', [CategoryController::class, 'manage'])->name("manage.category");

Route::patch('/category/status', [CategoryController::class, 'toggle'])->name("toggle.category");

// require __DIR__ . '/auth.php';

require __DIR__ . '/v2.api.php';
