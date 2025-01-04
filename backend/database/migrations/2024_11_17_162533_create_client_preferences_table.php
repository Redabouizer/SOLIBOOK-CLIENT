<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientPreferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_preferences', function (Blueprint $table) {
            // Unique identifier for each preference
            $table->id('preference_id');
            
            // Reference to the client
            $table->foreignId('client_id')->constrained('clients', 'client_id')->onUpdate('no action')->onDelete('cascade');
            
            // Reference to the preferred stylist (nullable to allow 'set null' on delete)
            $table->foreignId('preferred_stylist_id')->nullable()->constrained('stylists', 'stylist_id')->onUpdate('no action')->onDelete('set null');
            
            // Reference to the preferred service (nullable to allow 'set null' on delete)
            $table->foreignId('preferred_service_id')->nullable()->constrained('services', 'service_id')->onUpdate('no action')->onDelete('set null');
            
            // Timestamp when the preference was created
            $table->timestamp('created_at')->useCurrent();
            
            // Timestamp when the preference was last updated
            $table->timestamp('updated_at')->useCurrent()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_preferences');
    }
}
