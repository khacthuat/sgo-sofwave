<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        // $credentials = $request->only('email', 'password');
        // if (auth()->attempt($credentials)) {
        //     $token = auth()->user()->createToken('authToken')->plainTextToken;
        //     return response()->json(['token' => $token], 200);
        // } else {
        //     return response()->json(['error' => 'Unauthorized'], 401);
        // }
    }

    public function logout(Request $request){
        // auth()->user()->tokens()->delete();
        // return response()->json(['message' => 'Logged out'], 200);
    }

    public function me(Request $request){
        return response()->json($request->user(), 200);
    }
}

