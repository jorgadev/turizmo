<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Company;
use App\Models\Worker;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'is_company' => ['boolean'], 
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_company' => $request->input('is_company', false), 
        ]);

        // Automatically create a profile based on the user type
        if ($user->is_company) {
            Company::create([
                'user_id' => $user->id,
                'company_name' => $user->name,
            ]);
        } else {
            Worker::create([
                'user_id' => $user->id,
                'full_name' => $user->name,
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
