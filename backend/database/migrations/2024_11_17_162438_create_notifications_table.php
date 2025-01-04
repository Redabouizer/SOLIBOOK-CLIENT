<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            // Unique identifier for each notification
            $table->id('notification_id');
            
            // Reference to the client (client_id)
            $table->foreignId('client_id')->constrained('clients', 'client_id')->onUpdate('no action')->onDelete('cascade');
            
            // Message content of the notification
            $table->text('message');
            
            // Timestamp when the notification was created
            $table->timestamp('created_at')->useCurrent();
            
            // Read status of the notification (true/false)
            $table->boolean('read_status')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
}
