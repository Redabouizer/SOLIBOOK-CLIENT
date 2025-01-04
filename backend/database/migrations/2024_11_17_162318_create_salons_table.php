<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


class CreateSalonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salons', function (Blueprint $table) {
            // Unique identifier for each salon
            $table->id('salon_id')->comment('Unique identifier for each salon');

            // Reference to the user who owns the salon
            $table->foreignId('id')->constrained('users', 'id')->onUpdate('no action')->onDelete('no action')->comment('Reference to the user who owns the salon');

            // Name of the salon
            $table->string('name', 255)->comment('Name of the salon');

            // Description of the salon
            $table->text('description')->comment('Description of the salon');

            // Physical address of the salon
            $table->string('address', 255)->comment('Physical address of the salon');

            // Contact number for the salon
            $table->string('phone_number', 15)->unique()->comment('Contact number for the salon');

            // Email address of the salon
            $table->string('email', 255)->unique()->comment('Email address of the salon');

            // Indicates if the salon has a subscription plan
            $table->boolean('subscription_plan')->comment('Indicates if the salon has a subscription plan');

            // Timestamp when the salon account was created
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('Timestamp when the salon account was created');

            // Timestamp when the salon profile was last updated
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'))->comment('Timestamp when the salon profile was last updated');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('salons');
    }
}
