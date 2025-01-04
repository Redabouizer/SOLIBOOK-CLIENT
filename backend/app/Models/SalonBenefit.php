<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalonBenefit extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'salon_benefits';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'benefit_id';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true; // Uses the default timestamps (created_at, updated_at)

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'salon_id',
        'benefit_description',
        'start_date',
        'end_date',
    ];

    /**
     * Define the relationship with the Salon model.
     */
    public function salon()
    {
        return $this->belongsTo(Salon::class, 'salon_id');
    }
}
