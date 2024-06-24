<?php

namespace App\Http\Controllers;

use App\Models\Stories;
use App\Http\Requests\StoreStoriesRequest;
use App\Http\Requests\UpdateStoriesRequest;
use App\Http\Resources\StoriesResource;
use App\Http\Resources\TypeResource;
use App\Models\Type;
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
        $query = Stories::query();
        if ($request->has("types")) {
            $types = is_array($request->get("types")) ? $request->get("types") : explode(",", $request->get("types"));
            $query->whereHas('types', function ($q) use ($types) {
                $q->whereIn('name', $types);
            });
        }

        if ($request->has("name")) {
            $query->where("title", "like", "%" . $request->get("name") . "%");
        }

        $stories = $query->paginate(5);
        return Inertia::render('Stories/index', [
            'stories' => StoriesResource::collection($stories),
            'types' => TypeResource::collection(Type::all()),
            'searchQuery' => request()
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
        $stories->delete();
    }
}
