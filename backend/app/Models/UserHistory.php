<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHistory extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'user_history';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'history_id';

    /**
     * Indicates if the model should have timestamps.
     *
     * @var bool
     */
    public $timestamps = false; // No automatic timestamps (changed_at will be manually set)

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'changed_at',
        'action',
    ];

    /**
     * Define the relationship with the User model.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
