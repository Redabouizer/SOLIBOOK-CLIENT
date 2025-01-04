<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'appointments';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'appointment_id';

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
        'salon_id',
        'stylist_id',
        'service_id',
        'type_id',
        'appointment_dat',
        'status',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'appointment_dat' => 'datetime',
        'status' => 'string',
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
     * Define the relationship to the stylist.
     */
    public function stylist()
    {
        return $this->belongsTo(Stylist::class, 'stylist_id');
    }

    /**
     * Define the relationship to the service.
     */
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    /**
     * Define the relationship to the appointment type.
     */
    public function appointmentType()
    {
        return $this->belongsTo(AppointmentType::class, 'type_id');
    }
}
