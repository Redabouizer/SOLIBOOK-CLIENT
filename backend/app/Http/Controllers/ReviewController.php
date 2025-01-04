<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\JsonResponse;

class ReviewController extends Controller
{
    /**
     * Fetch all reviews with client and salon data.
     */
    public function index(): JsonResponse
    {
        $reviews = Review::with(['client', 'salon'])->get();

        return response()->json($reviews);
    }
}
