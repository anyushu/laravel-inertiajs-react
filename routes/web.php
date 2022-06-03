<?php

use Illuminate\Support\Facades\Route;

Route::get("/", \App\Http\Controllers\WelcomeController::class)->name('welcome');

Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)
    ->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
