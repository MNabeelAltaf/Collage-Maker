<?php

namespace Database\Seeders;

use App\Models\TemplateImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TemplateImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $templateImages = TemplateImage::all();

        foreach ($templateImages as $img) {
            $img->image_2 = $img->image;
            $img->save();
        }
    }
}
