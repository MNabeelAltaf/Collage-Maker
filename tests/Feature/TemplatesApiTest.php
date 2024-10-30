<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TemplatesApiTest extends TestCase
{
    public static $baseUrl = "123";
    private function assertIfImageExists($image)
    {
        $newImagePath = str_replace("http://localhost/", "http://localhost:8000/", $image);
        $response = $this->get($newImagePath);
        dd($newImagePath, $response->status(), $response->content());
        $this->assertTrue($response->status() == 200, $newImagePath);
        // $response->assertStatus(200);
    }
    public function test_templates_main_api_v1(): void
    {
        $response = $this->getJson(route('get.all.template'));
        $response->assertStatus(200);
        $responseContent = $response->getContent();
        $data = json_decode($responseContent, true);
        if (json_last_error() !== JSON_ERROR_NONE)
            throw new \Exception('Invalid JSON: ' . json_last_error_msg());
        $this->assertArrayHasKey('templates', $data);
        $this->assertIsArray($data['templates']);
        $this->assertNotEmpty($data['templates']);
        foreach ($data['templates'] as $categoriesWithTemplates) {
            $this->assertArrayHasKey('name', $categoriesWithTemplates);
            $this->assertTrue(strlen($categoriesWithTemplates['name']) > 0);
            $this->assertArrayHasKey('templates', $categoriesWithTemplates);
            $this->assertIsArray($categoriesWithTemplates['templates']);
            $this->assertNotEmpty($categoriesWithTemplates['templates']);
            $this->assertTrue(count($categoriesWithTemplates['templates']) <= 5 && count($categoriesWithTemplates['templates']) >= 1);
            $template = $categoriesWithTemplates['templates'][0];
            $this->assertArrayHasKey('uni', $template);
            $this->assertArrayHasKey('title', $template);
            $this->assertArrayHasKey('category', $template);
            $this->assertArrayHasKey('height', $template);
            $this->assertArrayHasKey('frameCount', $template);
            $this->assertArrayHasKey('width', $template);
            $this->assertArrayHasKey('thumbnail', $template);
            $this->assertArrayHasKey('whiteImage', $template);

            $this->assertIsString($template['uni']);
            $this->assertIsString($template['title']);
            $this->assertIsString($template['category']);
            $this->assertIsInt($template['height']);
            $this->assertIsInt($template['frameCount']);
            $this->assertIsInt($template['width']);
            $this->assertIsString($template['thumbnail']);
            $this->assertIsString($template['whiteImage']);
            // $this->assertIfImageExists($template['thumbnail']);
            // $this->assertIfImageExists($template['whiteImage']);

            $this->assertIsArray($template['images']);
            $this->assertNotEmpty($template['images']);

            foreach ($template['images'] as $templateImage) {
                $this->assertArrayHasKey("uni", $templateImage);
                $this->assertArrayHasKey("image", $templateImage);
                $this->assertArrayHasKey("width", $templateImage);
                $this->assertArrayHasKey("image_text", $templateImage);
                $this->assertArrayHasKey("height", $templateImage);
                $this->assertArrayHasKey("x_axis", $templateImage);
                $this->assertArrayHasKey("y_axis", $templateImage);
                $this->assertArrayHasKey("rotation", $templateImage);
                $this->assertArrayHasKey("scale", $templateImage);
                $this->assertArrayHasKey("isFrame", $templateImage);
                $this->assertArrayHasKey("isText", $templateImage);
                $this->assertArrayHasKey("isTop", $templateImage);
                $this->assertArrayHasKey("shapeType", $templateImage);
                $this->assertArrayHasKey("coordinates", $templateImage);

                $this->assertIsString($templateImage["uni"]);
                $this->assertIsString($templateImage["image"]);
                $this->assertIsString($templateImage["image_2"]);
                $this->assertIsString($templateImage["image_text"]);
                $this->assertIsString($templateImage["shapeType"]);
                $this->assertIsInt($templateImage["width"]);
                $this->assertIsInt($templateImage["height"]);
                $this->assertIsInt($templateImage["x_axis"]);
                $this->assertIsInt($templateImage["y_axis"]);
                $this->assertIsInt($templateImage["rotation"]);
                $this->assertIsInt($templateImage["scale"]);
                $this->assertIsInt($templateImage["isFrame"]);
                $this->assertIsInt($templateImage["isText"]);
                $this->assertIsInt($templateImage["isTop"]);

                $this->assertIsString($templateImage['coordinates']['top']);
                $this->assertIsString($templateImage['coordinates']['left']);
                $this->assertIsString($templateImage['coordinates']['right']);
                $this->assertIsString($templateImage['coordinates']['bottom']);
            }
        }
    }
}
