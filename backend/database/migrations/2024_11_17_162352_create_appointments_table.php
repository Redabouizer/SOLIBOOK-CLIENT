<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            // Unique identifier for each appointment
            $table->id('appointment_id')->comment('Unique identifier for each appointment');

            // Reference to the client making the appointment
            $table->foreignId('client_id')->constrained('clients', 'client_id')->onUpdate('no action')->onDelete('cascade')->comment('Reference to the client making the appointment');

            // Reference to the salon where the appointment is made
            $table->foreignId('salon_id')->constrained('salons', 'salon_id')->onUpdate('no action')->onDelete('cascade')->comment('Reference to the salon where the appointment is made');

            // Reference to the stylist handling the appointment (nullable for `SET NULL` to work)
            $table->foreignId('stylist_id')->nullable()->constrained('stylists', 'stylist_id')->onUpdate('no action')->onDelete('set null')->comment('Reference to the stylist handling the appointment');

            // Reference to the service being requested for the appointment (nullable for `SET NULL` to work)
            $table->foreignId('service_id')->nullable()->constrained('services', 'service_id')->onUpdate('no action')->onDelete('set null')->comment('Reference to the service being requested for the appointment');

            // Reference to the type of appointment
            $table->foreignId('type_id')->constrained('appointment_types', 'type_id')->onUpdate('no action')->onDelete('no action')->comment('Reference to the type of appointment');

            // Date and time of the appointment
            $table->timestamp('appointment_dat')->comment('Date and time of the appointment');

            // Status of the appointment
            $table->enum('status', ['booked', 'completed', 'canceled', 'no_show'])->comment('Status of the appointment (booked, completed, canceled, no_show)');

            // Timestamp when the appointment was created
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('Timestamp when the appointment was created');

            // Timestamp when the appointment was last updated
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'))->comment('Timestamp when the appointment was last updated');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
