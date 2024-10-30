<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SingleImageDataResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        $thumbnail = "";
        $image = "";
        if (strpos($this->image, 'https://') !== false) {
            $image = $this->image;
            $thumbnail = $this->thumbnail;
        } else {
            $image = asset('storage/' . $this->image);
            $thumbnail = asset('storage/' . $this->thumbnail);
        }
        $response = [
            'uni' => $this->id,
            'image' => $image,
            'thumbnail' => $thumbnail,
            'type' => $this->type,
        ];
        if (isset($this->name))
            $response['category_name'] = $this->name;
        $response['type'] = $this->type;
        return $response;
    }
}
