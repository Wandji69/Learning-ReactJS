<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $todos = Todo::all();

        return response()->json([
            "todo" => $todos
        ], 200);
    }
    public function store(Request $request)
    {
        # code...
        $todo = Todo::create([
            "content" => $request->content,
            "completed" => false
        ]);
        return response()->json([
            "todo" => $todo
        ], 200);
    }

    public function delete(Request $request)
    {
        # code...
        $todo = Todo::Whereid($request->id)->first();
        if (!is_null($todo)) {
            $todo->delete();
        }
        return response(200);
    }

    public function complete(Request $request)
    {
        # code...
        $todo = Todo::Whereid($request->id)->first();
        if (!is_null($todo)) {
            $todo->complete =  !$todo->complete;
            $todo->save();
        }
        return response(200);
    }
}
