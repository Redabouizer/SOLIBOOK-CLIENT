<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalonManagement extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'salon_management';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'management_id';

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
        'staff_count',
        'inventory_value',
        'operational_hours',
    ];

    /**
     * Define the relationship with the Salon model.
     */
    public function salon()
    {
        return $this->belongsTo(Salon::class, 'salon_id');
    }
}
