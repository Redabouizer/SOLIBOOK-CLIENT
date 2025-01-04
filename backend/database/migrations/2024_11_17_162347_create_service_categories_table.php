<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServiceCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_categories', function (Blueprint $table) {
            // Unique identifier for each category (primary key)
            $table->id('category_id');

            // Reference to the salon offering the category
            $table->foreignId('salon_id')->constrained('salons')->onUpdate('no action')->onDelete('no action');

            // Name of the service category
            $table->string('category_name', 100);

            // Timestamps for creation and updates
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_categories');
    }
}
