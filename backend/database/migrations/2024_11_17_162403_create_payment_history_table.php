<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_history', function (Blueprint $table) {
            // Unique identifier for each payment history record (primary key will be automatically created)
            $table->id('history_id'); // Auto-incrementing primary key
            
            // Reference to the client
            $table->foreignId('client_id')->nullable()
                  ->constrained('clients', 'client_id') // Specify custom foreign key column
                  ->onUpdate('no action')
                  ->onDelete('cascade');
            
            // Reference to the appointment
            $table->foreignId('appointment_id')->nullable()
                  ->constrained('appointments', 'appointment_id') // Specify custom foreign key column
                  ->onUpdate('no action')
                  ->onDelete('cascade');
            
            // Amount of the payment
            $table->decimal('amount', 10, 2)->nullable();
            
            // Payment method (e.g., 'cash', 'credit_card')
            $table->string('payment_method', 20)->nullable();
            
            // Payment date (timestamp)
            $table->timestamp('payment_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_history');
    }
}
