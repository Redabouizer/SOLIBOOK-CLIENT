<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStylistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stylists', function (Blueprint $table) {
            // Unique identifier for each stylist (primary key)
            $table->id('stylist_id');
            
            // Reference to the salon (salon_id)
            $table->foreignId('salon_id')->constrained('salons')->onUpdate('no action')->onDelete('cascade');
            
            // Name of the stylist
            $table->string('name', 100);
            
            // Specialty of the stylist
            $table->string('specialty', 100);
            
            // Timestamp when the stylist record was created
            $table->timestamp('created_at')->useCurrent();
            
            // Timestamp when the stylist record was last updated
            $table->timestamp('updated_at')->useCurrent()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stylists');
    }
}
