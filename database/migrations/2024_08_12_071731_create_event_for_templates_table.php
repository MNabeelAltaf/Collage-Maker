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
        Schema::create('event_for_templates', function (Blueprint $table) {
            $table->id();
            $table->string('event_type');
            $table->string('template_uni'); // Adjusted to match the foreign key attribute
            $table->string('ip');
            $table->string('device_id');
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('template_uni')
                ->references('uni') // The column in the templates table
                ->on('templates') // The table name
                ->onDelete('cascade'); // Optional: define what happens on delete
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_for_templates');
    }
};
