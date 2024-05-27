<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    //
    function index(){
        $user = Auth::user();
        if ($user) {
            return response()->json($user);
        }
         else {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            $user->update($request->all());
            return response()->json(['message' => 'Profile updated successfully']);
        } else {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }
    }
}
