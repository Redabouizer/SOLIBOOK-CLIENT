<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'services';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'service_id';

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
        'category_id',
        'service_name',
        'description',
        'duration',
        'price',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'duration' => 'integer',
        'price' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the salon that offers the service.
     */
    public function salon()
    {
        return $this->belongsTo(Salon::class, 'salon_id', 'salon_id');
    }

    /**
     * Get the category to which the service belongs.
     */
    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'category_id', 'category_id');
    }
}
