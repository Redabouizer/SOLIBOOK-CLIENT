<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StylistSpecialty extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'stylist_specialties';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = null; // No single primary key, composite key used

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false; // Composite primary key, no auto-incrementing

    /**
     * The data type of the primary key.
     *
     * @var string
     */
    protected $keyType = 'string'; // Since the key is composite, it's not an auto-incrementing integer.

    /**
     * Indicates if the model should have timestamps.
     *
     * @var bool
     */
    public $timestamps = false; // No timestamps by default for this table

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'stylist_id', 
        'specialty_id',
    ];

    /**
     * Define the relationship with the Stylist model.
     */
    public function stylist()
    {
        return $this->belongsTo(Stylist::class, 'stylist_id');
    }

    /**
     * Define the relationship with the Specialty model.
     */
    public function specialty()
    {
        return $this->belongsTo(Specialty::class, 'specialty_id');
    }
}
