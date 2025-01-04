<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStylistSpecialtiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stylist_specialties', function (Blueprint $table) {
            // Stylist ID (Foreign Key)
            $table->unsignedBigInteger('stylist_id');

            // Specialty ID (Foreign Key)
            $table->unsignedBigInteger('specialty_id');

            // Primary Key for the composite key
            $table->primary(['stylist_id', 'specialty_id']);

            // Defining foreign keys for stylist_id and specialty_id
            $table->foreign('stylist_id')
                  ->references('stylist_id')->on('stylists', 'stylist_id')
                  ->onUpdate('no action')
                  ->onDelete('no action');

            $table->foreign('specialty_id')
                  ->references('specialty_id')->on('specialties', 'specialty_id')
                  ->onUpdate('no action')
                  ->onDelete('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stylist_specialties');
    }
}
