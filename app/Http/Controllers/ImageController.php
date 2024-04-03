<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    //

    function upload(Request $request)
    {
        $request->file('image')->store('img');
        return ['result' => 'success'];
    }

    function show($filename)
    {
        return response()->file(storage_path('app/img/' . $filename));
    }

    function delete($filename)
    {
        unlink(storage_path('app/img/' . $filename));
        return ['result' => 'success'];
    }

    function update(Request $request, $filename)
    {
        $request->file('image')->storeAs('img', $filename);
        return ['result' => 'success'];
    }

    function index()
    {
        $files = scandir(storage_path('app/img'));
        $files = array_diff($files, ['.', '..']);
        return $files;
    }
}
