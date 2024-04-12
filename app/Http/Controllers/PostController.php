<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Hàm lấy danh sách toàn bộ bài viết
     * @param
     * @return $posts
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function index()
    {
        //
        $posts = Post::with(['user', 'status'])->get();
        return response()->json($posts);
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
     * Hàm lưu bài viết mới
     * @param Request $request
     * @return $users
     * CreatedBy: youngbachhh (04/04/2024)
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'address' => 'required',
            'area' => 'required',
            'price' => 'required',
            'unit' => 'required',
            'sold_status' => 'required',
            'user_id' => 'required',
            'status_id' => 'required'
        ]);

        $post = Post::create($request->all());

        return response()->json($post, 201);
    }

    /**
     * Hàm lấy thông tin bài viết theo id
     * @param Request $request
     * @return $users
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function show($id)
    {
        $post = Post::with(['user', 'status'])->find($id);
        return response()->json($post);
    }

    /**
     * Hàm lấy ra danh bài viết đang chờ duyệt
     * @param
     * @return $posts
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function pending()
    {
        $posts = Post::with(['user', 'status'])->where('status_id', 3)->get();
        return response()->json($posts);
    }

    /**
     * Hàm lấy ra danh bài viết không phải đang chờ duyệt
     * @param
     * @return $posts
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function notPending()
    {
        $posts = Post::with(['user', 'status'])->where('status_id', '!=', 3)->get();
        return response()->json($posts);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Hàm cập nhật thông tin bài viết theo id
     * @param Request $request, Post $post
     * @return $posts
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
        return response()->json($post);
    }

    /**
     * Hàm xóa bài viết theo id
     * @param Post $post
     * @return message
     * CreatedBy: youngbachhh (31/03/2024)
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(['message' => 'Xóa thành công'], 200);
    }

    public function filter_posts(Request $request)
    {
        $validatedData = $request->validate([
            'column' => 'required|string',
            'min' => 'required|integer',
            'max' => 'required|integer',
        ]);

        $column = strval($validatedData['column']);
        $min = $validatedData['min'];
        $max = $validatedData['max'];

        $posts = Post::whereBetween($column, [$min, $max])->get();

        return response()->json($posts, 200);
    }
}
