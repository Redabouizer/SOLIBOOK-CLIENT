<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateAppointmentStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointment_statistics', function (Blueprint $table) {
            // Unique identifier for each appointment statistic
            $table->id('appointment_statistic_id');
            
            // Foreign key reference to the appointment
            $table->foreignId('appointment_id')->constrained('appointments', 'appointment_id')->onUpdate('no action')->onDelete('cascade');
            
            // Client feedback score between 1 and 5
            $table->integer('client_feedback_score');
            
            // Timestamp for when the record was created
            $table->timestamp('created_at')->useCurrent();
            
        });

        // Add check constraint for client_feedback_score between 1 and 5 using raw SQL
        DB::statement('ALTER TABLE appointment_statistics ADD CONSTRAINT check_feedback_score CHECK (client_feedback_score BETWEEN 1 AND 5)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointment_statistics');
    }
}
