<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    /**
     * Welcome Page
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function __invoke()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }

        return redirect()->route('login');
    }
}
