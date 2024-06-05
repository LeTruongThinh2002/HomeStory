<?php

namespace App\Http\Controllers;

use App\Models\Stories;
use App\Http\Requests\StoreStoriesRequest;
use App\Http\Requests\UpdateStoriesRequest;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class StoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        return Inertia::render('Stories/index', [
            'stories' => Stories::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStoriesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Stories $stories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stories $stories)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStoriesRequest $request, Stories $stories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stories $stories)
    {
        //
    }
}
