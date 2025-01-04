<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'subscriptions';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'subscription_id';

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
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'salon_id',
        'plan_name',
        'price',
        'subscription_start_date',
        'subscription_end_date',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'subscription_start_date' => 'datetime',
        'subscription_end_date' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'price' => 'decimal:2',
    ];

    /**
     * Get the salon associated with the subscription.
     */
    public function salon()
    {
        return $this->belongsTo(Salon::class, 'salon_id', 'salon_id');
    }
}
