<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('event_for_other_types', function (Blueprint $table) {
            $table->id();
            $table->string('event_type');
            $table->foreignId('single_image_data_id'); // Adjusted to match the foreign key attribute
            $table->string('asset_type'); // Adjusted to match the foreign key attribute
            $table->string('ip');
            $table->string('device_id');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_for_other_types');
    }
};
