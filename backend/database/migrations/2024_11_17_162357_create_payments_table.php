<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            // Unique identifier for each payment
            $table->id('payment_id')->unique()->comment('Unique identifier for each payment'); // Auto-incrementing primary key
            
            // Reference to the appointment
            $table->foreignId('appointment_id')
                  ->constrained('appointments', 'appointment_id') // Specify the custom foreign key column
                  ->onUpdate('no action')
                  ->onDelete('no action')
                  ->comment('Reference to the appointment');
            
            // Amount of the payment
            $table->decimal('amount', 10, 2)->comment('Amount of the payment');
            
            // Payment method: 'cash' or 'credit_card'
            $table->enum('payment_method', ['cash', 'credit_card'])->comment('Payment method: cash or credit card');
            
            // Payment status: 'pending', 'completed', or 'failed'
            $table->enum('payment_status', ['pending', 'completed', 'failed'])->comment('Status of the payment');
            
            // Timestamp when the payment was created and last updated
            $table->timestamps(0); // This will add 'created_at' and 'updated_at' columns
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
