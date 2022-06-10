<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Folder;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class FoldersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $folders = Folder::where('user_id', $user->id)
        ->get();

        return response()->json(
            $folders->map(function ($folder) {
                return $folder->name;
            })
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = $request->user();

        $validator = Validator::make($request->all(),[
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()], 
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // ↓TODO: 作成数制限どうする？
        $folders = Folder::where('user_id', $user->id)->get();
        
        if (3 < $folders->count()){
            return response()->json(['フォルダの作成は３つまでです'],
            Response::HTTP_BAD_REQUEST);
        }

        $create = Folder::create([
            'user_id' => $user->id,
            'name' => $request->name,
        ]);

        return response()->noContent();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $user = $request->user();

        $folder = Folder::where('user_id', $user->id)
        // ->where('id', $id);
        ->find($id);
        // ->get();


        if ($folder->user_id !== $user->id){
            return response()->json(['message' => '口コミが登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        if ($folder->count() === 0){
            return response()->json(['message' => '口コミが登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        $folder->delete();
        return response()->noContent();
    }
}
