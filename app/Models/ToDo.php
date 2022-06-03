<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ToDo extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'to_dos';

    /**
     * 削除済みToDo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function deletedToDos()
    {
        return $this->hasMany(DeletedToDo::class);
    }

    /**
     * ToDoステータス
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function status()
    {
        return $this->belongsTo(ToDoStatus::class);
    }
}
