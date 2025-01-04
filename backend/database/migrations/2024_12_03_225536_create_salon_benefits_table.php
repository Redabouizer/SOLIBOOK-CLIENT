<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalonBenefitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salon_benefits', function (Blueprint $table) {
            // Unique identifier for each benefit
            $table->id('benefit_id');
            
            // Foreign key reference to the salon
            $table->foreignId('salon_id')->constrained('salons', 'salon_id')->onUpdate('no action')->onDelete('cascade');

            // Description of the benefit (long text)
            $table->text('benefit_description');
            
            // Start and end date of the benefit
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            
            // Timestamps for creation (automatic)
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
        Schema::dropIfExists('salon_benefits');
    }
}
