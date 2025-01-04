<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::with(['salon', 'category'])->get();  // Eager load the salon and category relationships
        return response()->json($services);
    }
}
