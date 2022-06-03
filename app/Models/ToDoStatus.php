<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDoStatus extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'to_do_statuses';

    /**
     * @var array
     */
    protected $fillable = ['user_id', 'name', 'color'];

    /**
     * User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * 削除済みToDo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function toDos()
    {
        return $this->hasMany(ToDo::class);
    }
}
