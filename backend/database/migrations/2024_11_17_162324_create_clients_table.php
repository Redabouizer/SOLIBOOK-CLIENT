<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


class CreateClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            // Unique identifier for each client
            $table->id('client_id')->comment('Unique identifier for each client');

            // Reference to the user who client
            $table->foreignId('user_id')->constrained('users', 'id')->onUpdate('no action')->onDelete('cascade')->comment('Reference to the user who client');

            // Client's full name
            $table->string('first_name', 255)->comment('Client\'s full name');
            $table->string('last_name', 255)->comment('Client\'s last name');

            // Client's contact number
            $table->string('phone_number', 15)->comment('Client\'s contact number');

            // Physical address of the client
            $table->string('address', 255)->comment('Physical address of the client');

            // Timestamp when the client account was created
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('Timestamp when the client account was created');

            // Timestamp when the client profile was last updated
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'))->comment('Timestamp when the client profile was last updated');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
