<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\UserUnmatchedItem;
use App\Models\Item;
use App\Models\Ingredient;
use App\Models\UserFavoriteItem;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class UserUnmatchedItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $unmatchedItems = Item::userUnmatchedOnly($user->id)
        ->get();

        return response()->json(
            [
                'unmatched_items' => $unmatchedItems->map(function($item) { return $item->toArrayItemId(); }),
                // TODO: ↓idが渡っているけど、ingredientsのnameを渡したい
                'unmatched_ingredients' => $user->getCommonUnmatchedIngredients($user),
                // 'unmatched_ingredients' => $user->getCommonUnmatchedIngredientNames($user),
            ]
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

        if ($validator->fails()){
            return response()->json(['message' => $validator->messages()], 
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $unmatchedItem = UserUnmatchedItem::where('user_id', $user->id)
            ->where('item_id', $request->item_id)
            ->get();
        
        if ($unmatchedItem->count() !== 0){
            return response()->json(['message' => '既に登録されています'],
            Response::HTTP_BAD_REQUEST);
        }

        UserUnmatchedItem::create([
            'user_id' => $user->id,
            'item_id' => $request->item_id,
        ]);

        return response()->noContent();
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
        $validator = Validator::make($request->all(),[
            'memo' => 'required',
        ]);

        if ($validator->fails()){
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = $request->user();
        $unmatchedItem = UserUnmatchedItem::where('user_id', $user->id)
            ->find($id);

        if (empty($unmatchedItem)){
            return response()->json(['message' => 'データがありません'], Response::HTTP_NOT_FOUND);
        }

        $unmatchedItem->memo = $request->memo;
        $unmatchedItem->save();

        return response()->noContent();
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
        $unmatchedItem = UserUnmatchedItem::where('user_id', $user->id)->where('item_id', $itemId);

        if ($unmatchedItem->count() === 0){
            return response()->json(['message' => '肌に合わなかったアイテムに登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        $unmatchedItem->delete();
        return response()->noContent();
    }
}