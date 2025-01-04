<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Waitlist extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'waitlist';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'waitlist_id';

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
    public $timestamps = false; // Using a custom column for timestamps

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'client_id',
        'salon_id',
        'service_id',
        'added_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'added_at' => 'datetime',
    ];

    /**
     * Define the relationship to the client.
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    /**
     * Define the relationship to the salon.
     */
    public function salon()
    {
        return $this->belongsTo(Salon::class, 'salon_id');
    }

    /**
     * Define the relationship to the service.
     */
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}
