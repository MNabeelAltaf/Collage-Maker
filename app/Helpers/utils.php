<?php

use Illuminate\Support\Facades\Storage;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

if (!function_exists('resize_and_crop')) {
  function resize_and_crop($input_path, $output_path, $target_width, $target_height, $maintain_aspect_ratio = true, $extension)
  {
    list($orig_width, $orig_height) = getimagesize($input_path);
    $aspect_ratio = $orig_width / $orig_height;
    if (($target_width / $target_height) < $aspect_ratio) {
      $new_width = (int) ($target_height * $aspect_ratio);
      $new_height = $target_height;
    } else {
      $new_width = $target_width;
      $new_height = (int) ($target_width / $aspect_ratio);
    }
    $img_resized = imagecreatetruecolor($new_width, $new_height);
    if ($extension == 'webp') {
      $img_orig = imagecreatefromwebp($input_path);
    } else if ($extension == 'png') {
      $img_orig = imagecreatefrompng($input_path);
      imagealphablending($img_resized, false);
      imagesavealpha($img_resized, true);
      $transparent = imagecolorallocatealpha($img_resized, 0, 0, 0, 127);
      imagefill($img_resized, 0, 0, $transparent);
    } else if ($extension == 'jpg') {
      $img_orig = imagecreatefromjpeg($input_path);
    } else if ($extension == 'jpeg') {
      $img_orig = imagecreatefromjpeg($input_path);
    }
    try {
      imagecopyresampled($img_resized, $img_orig, 0, 0, 0, 0, $new_width, $new_height, $orig_width, $orig_height);
    } catch (\Throwable $th) {
      http_response_code(400);
      echo json_encode(['message' => $th->getMessage()]);
      exit;
    }
    $left = ($new_width - $target_width) / 2;
    $top = ($new_height - $target_height) / 2;
    $img_cropped = imagecrop($img_resized, ['x' => $left, 'y' => $top, 'width' => $target_width, 'height' => $target_height]);
    $target_extesion = pathinfo($output_path, PATHINFO_EXTENSION);
    if ($target_extesion == 'webp')
      imagewebp($img_cropped, $output_path, 90);
    else if ($target_extesion == 'png')
      imagepng($img_cropped, $output_path, 90);
    else
      imagejpeg($img_cropped, $output_path, 90);
    imagedestroy($img_orig);
    imagedestroy($img_resized);
    imagedestroy($img_cropped);
  }

}

if (!function_exists('getUpcomingEvents')) {
  function getUpcomingEvents()
  {
    $today = Carbon::createFromDate(2024, 12, 20)->subDays(20);
    // $today = Carbon::now()->subDays(30);

    $endDate = $today->copy()->addDays(50);

    $todayFormatted = $today->format('m-d');
    $endDateFormatted = $endDate->format('m-d');

    // If today and endDate are in the same year, the query is simpler
    if ($today->year === $endDate->year) {
      return Event::where(function ($query) use ($todayFormatted, $endDateFormatted) {
        $query->whereRaw("DATE_FORMAT(`from`, '%m-%d') between ? and ?", [$todayFormatted, $endDateFormatted])
          ->orWhereRaw("DATE_FORMAT(`to`, '%m-%d') between ? and ?", [$todayFormatted, $endDateFormatted]);
      })->with([
            'categories' => function ($query) {
              $query->select('categories.name');
            }
          ])->get();
    }

    // If today's year is different from the endDate's year (cross-year span), split the query
    else {
      // Get events in the current year (remaining days of the year)
      $eventsInCurrentYear = Event::where(function ($query) use ($todayFormatted) {
        $query->whereRaw("DATE_FORMAT(`from`, '%m-%d') between ? and ?", [$todayFormatted, '12-31'])
          ->orWhereRaw("DATE_FORMAT(`to`, '%m-%d') between ? and ?", [$todayFormatted, '12-31']);
      })->with([
            'categories' => function ($query) {
              $query->select('categories.name');
            }
          ])->get();

      // Get events in the next year (first few days of the new year)
      $eventsInNextYear = Event::where(function ($query) use ($endDateFormatted) {
        $query->whereRaw("DATE_FORMAT(`from`, '%m-%d') between ? and ?", ['01-01', $endDateFormatted])
          ->orWhereRaw("DATE_FORMAT(`to`, '%m-%d') between ? and ?", ['01-01', $endDateFormatted]);
      })->with([
            'categories' => function ($query) {
              $query->select('categories.name');
            }
          ])->get();

      // Combine both sets of events
      return $eventsInCurrentYear->merge($eventsInNextYear);
    }
  }
}

if (!function_exists('getCategoriseBasedOnEvents')) {
  function getCategoriseBasedOnEvents()
  {
    $categories = [];
    foreach (getUpcomingEvents() as $event) {
      $cat = $event->categories;
      if (count($cat))
        foreach ($cat as $c)
          $categories[] = $c['name'];
    }
    return $categories;
  }
}
