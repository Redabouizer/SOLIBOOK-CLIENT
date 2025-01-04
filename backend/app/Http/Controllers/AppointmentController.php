<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AppointmentController extends Controller
{
    public function getAppointments($userId)
    {
        try {
            // Fetch appointments with related models for the given user ID
            $appointments = Appointment::with([
                'salon',
                'stylist',
                'service',
                'appointmentType'
            ])->where('client_id', $userId)->get();

            if ($appointments->isEmpty()) {
                Log::info("No appointments found for user ID: $userId");
                return response()->json(['success' => false, 'message' => 'No appointments found'], 404);
            }

            return response()->json(['success' => true, 'data' => $appointments], 200);
        } catch (\Exception $e) {
            // Log the exception message with additional context
            Log::error('Error fetching appointments for user ID ' . $userId . ': ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Server error: ' . $e->getMessage()
            ], 500);
        }
    }
}
