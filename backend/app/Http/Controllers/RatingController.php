<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;
use App\Models\User;

class RatingController extends Controller
{
    public function getRatings($id)
    {
        $ratings = Rating::where('user_id', $id)->get();
        return response()->json($ratings);
    }

    public function createRating(Request $request, $id)
    {
        $rating = new Rating();
        $rating->rating = $request->rating;
        $rating->user_id = $id;
        $rating->save();
        return response()->json($rating);
    }
}
