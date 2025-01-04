<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateAvailabilityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('availability', function (Blueprint $table) {
            // Unique identifier for each availability record
            $table->id('availability_id');  // No need for '->unique()' as it's already unique by default
            
            // Reference to the stylist (stylist_id)
            $table->foreignId('stylist_id')->constrained('stylists', 'stylist_id') // Ensure the correct table name (plural)
                  ->onUpdate('no action')
                  ->onDelete('cascade');
            
            // Date of availability
            $table->date('date');
            
            // Start time of the availability period
            $table->time('start_time');
            
            // End time of the availability period
            $table->time('end_time');
            
            // Timestamps
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->nullable()->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('availability');
    }
}
