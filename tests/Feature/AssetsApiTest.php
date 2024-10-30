<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AssetsApiTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_assets_main_api(): void
    {
        $type = "sticker";
        $response = $this->getJson(route('serve.assets', ['type' => $type]));
        $response->assertStatus(200);
        $responseContent = $response->getContent();
        $data = json_decode($responseContent, true);
        if (json_last_error() !== JSON_ERROR_NONE)
            throw new \Exception('Invalid JSON: ' . json_last_error_msg());
        $this->assertArrayHasKey('assets', $data);
        $this->assertIsArray($data['assets']);
        foreach ($data['assets'] as $assetsWithCategories) {
            $this->assertIsString($assetsWithCategories['name']);
            $this->assertIsString($assetsWithCategories['uni']);
            $this->assertIsArray($assetsWithCategories[ucfirst($type)]);
            if ($type === "sticker" && $assetsWithCategories['name'] === "Image")
                continue;
            $this->assertNotEmpty($assetsWithCategories[ucfirst($type)]);
            foreach ($assetsWithCategories[ucfirst($type)] as $asset) {
                $this->assertIsInt($asset['uni']);
                $this->assertIsString($asset['type']);
                $this->assertIsString($asset['thumbnail']);
                $this->assertIsString($asset['image']);
                $this->assertEquals(ucfirst($asset['type']), ucfirst($type));
            }
        }
    }
}
