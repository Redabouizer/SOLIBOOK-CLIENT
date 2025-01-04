<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Assuming you have a User model
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource; // Optional, if you're using API resources

class ClientController extends Controller
{
    /**
     * Display the user data.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Ensure the authenticated user is fetching their own data
        if (Auth::id() !== (int)$id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Fetch the user data from the database
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Return the user data as a JSON response
        // Optionally, you can use an API Resource for better structure
        return response()->json($user);
    }
}
