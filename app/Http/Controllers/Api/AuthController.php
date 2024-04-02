<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Hàm đăng nhập
     * @param Request $request
     * @return $user
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function login(Request $request)
    {

        $success = Auth::attempt($request->only('email', 'password'));

        if (!$success) {
            return response()->json(['message' => 'Thông tin đăng nhập không đúng!'], 401);
        }

        $user = User::where('email', $request->email)->first();

        $token = $user->createToken($request->email);

        $user->token = $token->plainTextToken;

        return response()->json($user, 200);
    }

    /**
     * Hàm đăng xuất
     * @param Request $request
     * @return $message
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function logout(Request $request)
    {
        // Chỉ xóa token hiện tại
        // print_r($request->user()->currentAccessToken());
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Đăng xuất thành công'], 200);
    }


    public function me(Request $request)
    {
        return response()->json($request->user(), 200);
    }
}
