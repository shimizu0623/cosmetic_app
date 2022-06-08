<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserComparisonItem;
use App\Models\Item;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class UserComparisonItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $items = Item::userComparisonItemOnly($user->id)
        ->get();

        return response()->json(
            $items->map(function ($item) {
                $array = $item->toArrayItemId();
                $array['green'] = $item->ingredients
                ->filter(function($ingredient) { return 1 <= $ingredient->score && $ingredient->score <= 2; })
                ->count();                
                $array['yellow'] = $item->ingredients
                ->filter(function($ingredient) { return 3 <= $ingredient->score && $ingredient->score <= 6; })
                ->count();                
                $array['red'] = $item->ingredients
                ->filter(function($ingredient) { return 7 <= $ingredient->score && $ingredient->score <= 10; })
                ->count();                
                return $array;
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
            'item_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()],
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $items = UserComparisonItem::where('user_id', $user->id)
        ->where('item_id', $request->item_id)
        ->get();

        if ($items->count() !== 0){
            return response()->json(['message' => '既に登録されています'],
            Response::HTTP_BAD_REQUEST);
        }

        UserComparisonItem::create([
            'user_id' => $user->id,
            'item_id' => $request->item_id,
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
    public function destroy(Request $request, $itemId)
    {
        $user = $request->user();

        $item = UserComparisonItem::where('item_id', $itemId)->where('user_id', $user->id);

        if ($item->count() === 0){
            return response()->json(['message' => '登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        $item->delete();
        return response()->noContent();
    }
}
