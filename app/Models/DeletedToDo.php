<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeletedToDo extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'deleted_to_dos';

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
     * ToDoステータス
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function toDo()
    {
        return $this->belongsTo(ToDo::class);
    }
}
