<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            // Unique identifier for each review
            $table->id('review_id')->comment('Unique identifier for each review');

            // Reference to the client who wrote the review
            $table->foreignId('client_id')->constrained('clients', 'client_id')->onUpdate('no action')->onDelete('cascade')->comment('Reference to the client who wrote the review');

            // Reference to the salon being reviewed
            $table->foreignId('salon_id')->constrained('salons', 'salon_id')->onUpdate('no action')->onDelete('cascade')->comment('Reference to the salon being reviewed');

            // Rating given by the client (1 to 5)
            $table->unsignedInteger('rating')->check('rating >= 1 and rating <= 5')->comment('Rating given by the client (1 to 5)');

            // Review comment
            $table->text('comment')->comment('Review comment');

            // Timestamp when the review was created
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('Timestamp when the review was created');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
