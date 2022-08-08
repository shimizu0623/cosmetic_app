<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Folder;
use App\Models\FolderItem;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class FolderItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            FolderItem::all()
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

        $validator = Validator::make($request->all(),[
            'folder_id' => 'required',
            'item_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()], 
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $items = FolderItem::where('folder_id', $request->folder_id)->get();
        $check = FolderItem::where('folder_id', $request->folder_id)->where('item_id', $request->item_id)->get();
        
        if ($check->count() !== 0){
            return response()->json(['message' => '既に登録されています'],
            Response::HTTP_BAD_REQUEST);
        }

        if (8 <= $items->count()){
            return response()->json(['message' => '1つのファイルに登録できるアイテムは8個までです'],
            Response::HTTP_BAD_REQUEST);
        } else {
            $create = FolderItem::create([
                'folder_id' => $request->folder_id,
                'item_id' => $request->item_id,
            ]);
    
            return response()->noContent();
        }

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

    public function delete(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'folder_id' => 'required',
            'item_id' => 'required',
        ]);

        if ($validator->fails()){
            return response()->json(['message' => $validator->messages()], 
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = $request->user();
        $folder = Folder::where('user_id', $user->id)
        ->find($request->folder_id);

        $folderItem = FolderItem::where('folder_id', $folder->id)->where('item_id', $request->item_id)->first();

        if ($folderItem === null){
            return response()->json(['message' => 'フォルダが登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        $folderItem->delete();
        return response()->noContent();
    }
}