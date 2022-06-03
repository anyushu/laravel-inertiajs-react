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
     * 削除済みToDo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function toDos()
    {
        return $this->hasMany(ToDos::class);
    }
}
