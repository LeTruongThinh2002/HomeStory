<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', 'dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
    Route::get('stories/add', fn() => Inertia::render('Stories/Add'))->name('stories.add');
    Route::get('type/add', fn() => Inertia::render('Type/Add'))->name('type.add');
    Route::get('tag/add', fn() => Inertia::render('Tag/Add'))->name('tag.add');
    Route::get('user/add', fn() => Inertia::render('User/Add'))->name('user.add');
    Route::get('page/add', fn() => Inertia::render('Page/Add'))->name('page.add');

    Route::resource('stories', \App\Http\Controllers\StoriesController::class);
    Route::resource('user', \App\Http\Controllers\UserController::class);
    Route::resource('page', \App\Http\Controllers\PageController::class);
    Route::resource('type', \App\Http\Controllers\TypeController::class);
    Route::resource('tag', \App\Http\Controllers\TagController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
