<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            // Create the subscription_id column and set it as the primary key
            $table->bigIncrements('subscription_id'); // Automatically sets it as primary key and auto-incrementing
            
            // Reference to the salon subscribing
            $table->foreignId('salon_id')->constrained('salons')->onUpdate('no action')->onDelete('no action');
            
            // Name of the subscription plan
            $table->string('plan_name', 255);
            
            // Price of the subscription plan
            $table->decimal('price', 10, 2);
            
            // Subscription start and end dates
            $table->timestamp('subscription_start_date');
            $table->timestamp('subscription_end_date');
            
            // Timestamps for creation and last update
            $table->timestamps(0); // This will add 'created_at' and 'updated_at' fields with the current timestamp
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscriptions');
    }
}
