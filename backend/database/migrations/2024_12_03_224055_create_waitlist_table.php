<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateWaitlistTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('waitlist', function (Blueprint $table) {
            // Unique identifier for each waitlist entry
            $table->id('waitlist_id');

            // Reference to the client on the waitlist
            $table->foreignId('client_id')->constrained('clients', 'client_id')->onUpdate('no action')->onDelete('cascade');

            // Reference to the salon
            // Make salon_id nullable to allow onDelete('set null')
            $table->foreignId('salon_id')->nullable()->constrained('salons', 'salon_id')->onUpdate('no action')->onDelete('set null');

            // Reference to the service the client is waiting for
            $table->foreignId('service_id')->constrained('services', 'service_id')->onUpdate('no action')->onDelete('cascade');

            // Timestamp when the client was added to the waitlist
            $table->timestamp('added_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('waitlist');
    }
}
