<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            // Unique identifier for each service
            $table->id('service_id'); // Auto-incrementing primary key
            
            // Reference to the salon offering the service
            $table->foreignId('salon_id')->constrained('salons')->onUpdate('no action')->onDelete('cascade');
            
            // Reference to the service category
            $table->foreignId('category_id')->constrained('service_categories', 'category_id')->onUpdate('no action')->onDelete('cascade');
            
            // Name of the service (e.g., Swedish Massage)
            $table->string('service_name', 255);
            
            // Detailed description of the service
            $table->text('description');
            
            // Duration of the service in minutes
            $table->integer('duration');
            
            // Price of the service
            $table->decimal('price', 10, 2);
            
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
        Schema::dropIfExists('services');
    }
}
