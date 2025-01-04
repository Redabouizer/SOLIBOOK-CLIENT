<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalonManagementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salon_management', function (Blueprint $table) {
            // Unique identifier for each salon management record
            $table->id('management_id');

            // Reference to the salon (foreign key)
            $table->foreignId('salon_id')->constrained('salons', 'salon_id')->onUpdate('no action')->onDelete('cascade');

            // Staff count
            $table->integer('staff_count');

            // Inventory value (decimal)
            $table->decimal('inventory_value', 10, 2)->nullable();

            // Operational hours (as a string)
            $table->string('operational_hours', 255)->nullable();

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
        Schema::dropIfExists('salon_management');
    }
}
