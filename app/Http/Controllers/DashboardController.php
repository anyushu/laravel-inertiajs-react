<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Dashboard Page
     *
     * @return \Inertia\Response
     */
    public function __invoke()
    {
        $user = Auth::user();
        $statuses = $user->toDoStatuses()->with('toDos')->get();

        return Inertia::render('Dashboard', [
            'statuses' => $statuses
        ]);
    }
}
