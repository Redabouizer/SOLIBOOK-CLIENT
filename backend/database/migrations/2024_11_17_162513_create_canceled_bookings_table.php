<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB; // Import DB facade for raw SQL if needed

class CreateCanceledBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('canceled_bookings', function (Blueprint $table) {
            // Primary key
            $table->id('canceled_id');

            // Foreign key referencing the appointments table
            $table->foreignId('appointment_id')->constrained('appointments', 'appointment_id')->onDelete('cascade');

            // Cancellation reason
            $table->text('cancellation_reason');

            // Timestamps
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('canceled_bookings');
    }
}
