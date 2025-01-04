<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreatePromotionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promotions', function (Blueprint $table) {
            // Unique identifier for each promotion
            $table->id('promotion_id');
            
            // Reference to the salon offering the promotion
            $table->foreignId('salon_id')->constrained('salons', 'salon_id')->onUpdate('no action')->onDelete('cascade');
            
            // Unique promotion code
            $table->string('promotion_code', 50)->unique();
            
            // Discount percentage with validation between 0 and 100
            $table->decimal('discount_percentage', 5, 2);
            
            // Start date of the promotion
            $table->timestamp('start_date');
            
            // End date of the promotion
            $table->timestamp('end_date');
            
            // Timestamp when the promotion was created
            $table->timestamp('created_at')->useCurrent();
            
        });

        // You can add a check constraint for the discount_percentage field in Laravel using raw SQL
        DB::statement('ALTER TABLE promotions ADD CONSTRAINT check_discount_percentage CHECK (discount_percentage BETWEEN 0 AND 100)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('promotions');
    }
}
