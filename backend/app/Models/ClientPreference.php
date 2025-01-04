<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientPreference extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'client_preferences';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'preference_id';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * The data type of the primary key.
     *
     * @var string
     */
    protected $keyType = 'int';

    /**
     * Indicates if the model should have timestamps.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'client_id',
        'preferred_stylist_id',
        'preferred_service_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Define the relationship to the client.
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * Define the relationship to the preferred stylist.
     */
    public function preferredStylist()
    {
        return $this->belongsTo(Stylist::class, 'preferred_stylist_id');
    }

    /**
     * Define the relationship to the preferred service.
     */
    public function preferredService()
    {
        return $this->belongsTo(Service::class, 'preferred_service_id');
    }
}
