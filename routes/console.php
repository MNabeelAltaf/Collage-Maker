<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schedule;



Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::call(function () {
    DB::table('personal_access_tokens')->delete();
})->daily();

Artisan::command('migrate:rollback-specific  {migration}', function (string $migration) {
    $this->info("Sending email to: {$migration}");
    $migrationPath = database_path('migrations/' . $migration . '.php');
    if (file_exists($migrationPath)) {
        require_once $migrationPath;
        $class = getMigrationClass($migration);
        $migrationInstance = new $class();
    } else {
        $this->info("File not found!");
    }
});