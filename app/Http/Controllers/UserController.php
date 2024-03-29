<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validatedData = $request->validate(
            [
                'name' => 'required',
                'email' => 'required|email|unique:users',

            ],
            [
                'name.required' => 'Không được bỏ trống tên',
                'email.required' => 'Không được bỏ trống email',
                'email.email' => 'Email không đúng định dạng',
                'email.unique' => 'Email đã tồn tại',

            ]
        );

        $user = User::create(
            [
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'role_id' => $request['role_id'],
                'is_active' => $request['is_active'],
                'password' => Hash::make('123456'),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]
        );


        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return User::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $sser
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //



    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->update([
            "name" => $request->name,
            "email" => $request->email,
            "role_id" => $request->role_id,
            "is_active" => $request->is_active,
            "updated_at" => date('Y-m-d H:i:s'),
        ]);

        return response()->json(['message' => 'Cập nhật thành công'], 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
        $user->delete();
        return response()->json(['message' => 'Xóa thành công'], 200);
    }
}
