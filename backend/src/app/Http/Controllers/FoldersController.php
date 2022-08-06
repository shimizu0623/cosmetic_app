<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
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
                return $folder->toArray();
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

        if ($validator->fails()){
            return response()->json(['message' => $validator->messages()], 
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $folders = Folder::where('user_id', $user->id)->get();
        
        if ($folders->count() < 3){
            $create = Folder::create([
                'user_id' => $user->id,
                'name' => $request->name,
            ]);

            return response()->noContent();
        } else {
            return response()->json(['フォルダの作成は3つまでです'],
            Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $user = $request->user();
        $folder = Folder::find($id);
        
        return response()->json(
            [
                'id' => $folder->id,
                'user_id' => $user->id,
                'name' => $folder->name,
                'items' => $folder->items->map(function($item) { return $item->toArray(); }),
                'ingredient_score' => $ingredientScore,
                // 'ingredients' => $item->ingredients->map(function($ingredient) { return $ingredient->toArray(); }),
                // 'ingredients' => $folder->items->map(function($item) { return $item->ingredients->map(function($ingredient) { return $ingredient->toArray(); }) }),
                // 'ingredients' => $folder->items->map(function($item) { return $item })->$item->ingredients->map(function($ingredient) { return $ingredient->toArray(); }),
            ]
        );
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
        ->find($id);


        if ($folder->user_id !== $user->id){
            return response()->json(['message' => 'フォルダが登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        if ($folder->count() === 0){
            return response()->json(['message' => 'フォルダが登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        // Log::debug($folder); // TODO: →下のdelete()でエラーが出るが、↓しても大丈夫か確認する
        // https://qiita.com/kouki_o9/items/3e02fa51b34e707b7cec

        $folder->delete();
        return response()->noContent();

    }
}