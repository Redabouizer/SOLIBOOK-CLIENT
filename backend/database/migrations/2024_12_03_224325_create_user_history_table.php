<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_history', function (Blueprint $table) {
            // Unique identifier for each history record
            $table->id('history_id');

            // Foreign key referencing the user who made the change
            $table->unsignedBigInteger('user_id')->nullable();

            // Timestamp of when the action took place
            $table->timestamp('changed_at')->useCurrent();

            // Action description
            $table->string('action', 255);

            // Defining the foreign key constraint for user_id
            $table->foreign('user_id')
                  ->references('id')->on('users', 'user_id')
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
        Schema::dropIfExists('user_history');
    }
}
