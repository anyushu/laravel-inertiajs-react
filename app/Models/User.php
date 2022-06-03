<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * ToDoStatus
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function toDoStatuses()
    {
        return $this->hasMany(ToDoStatus::class);
    }

    /**
     * ToDo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function toDos()
    {
        return $this->hasMany(ToDo::class);
    }

    /**
     * 削除済みToDo
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function deletedToDos()
    {
        return $this->hasMany(DeletedToDos::class);
    }
}
