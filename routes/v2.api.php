<?php

use App\Http\Controllers\v2\PremiumController;
use App\Http\Controllers\v2\SingleImageDataController as V2SingleImageDataController;
use App\Http\Controllers\v2\TemplateController as V2TemplateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v2')->group(function () {

  Route::get('/templates', [V2TemplateController::class, 'getPaginatedTemplates'])->name("v2.get.paginated.template");

  Route::get('/templates/{category_name}', [V2TemplateController::class, 'getTemplatesFronASingleCategory'])->name("v2.get.all.template.for.a.category");

  Route::get('/assets/{type}', [V2SingleImageDataController::class, 'getSingleImageContent'])->name("serve.assets");

  Route::get('/assets/{type}/{category_name}', [V2SingleImageDataController::class, 'getAssetsForSingleCategory'])->name("v2.get.assets.for.single.category");

  Route::get('/voices', [PremiumController::class, 'getVoiceImages'])->name("get.voice.images");
});
