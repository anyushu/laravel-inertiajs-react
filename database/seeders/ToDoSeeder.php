<?php

namespace Database\Seeders;

use App\Models\ToDo;
use App\Models\ToDoStatus;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ToDoSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::first();

        $statuses = [
            ['name' => 'backlog', 'color' => '#ef4444'],
            ['name' => 'in-progress', 'color' => '#a855f7'],
            ['name' => 'done', 'color' => '#3b82f6'],
        ];

        foreach ($statuses as $status) {
            $todo_status = ToDoStatus::create([
                'user_id' => $user->id,
                'name' => $status['name'],
                'color' => $status['color'],
            ]);

            ToDo::create([
                'user_id' => $user->id,
                'to_do_status_id' => $todo_status->id,
                'title' => $todo_status->name . 'のタスク'
            ]);
        }
    }
}
