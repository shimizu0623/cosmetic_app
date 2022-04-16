<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserFavoriteItem;
// TODO: エラーが出てるので確認する
// use App\Models\User;
use App\Models\Item;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class UserFavoriteItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $favorites = $user->getFavoriteItems();

        return response()->json(
            $favorites->map(function ($favorite) {
                return $favorite->toArray();
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
            // 'user_id' => 'required',
            'item_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // $favorite = UserFavoriteItem::create([
        //     'user_id' => $request->user_id,
        //     'item_id' => $request->item_id,
        // ]);

        $create = UserFavoriteItem::create([
            'user_id' => $user->id,
            'item_id' => $request->item_id,
        ]);

        return response()->json($create, Response::HTTP_OK);

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

        // TODO: ↓削除できずエラーが出てしまう
        $user = $request->user();

        UserFavoriteItem::where('item_id', $itemId)->where('user_id', $user->id)->delete();
        // return redirect('/')->with('success', '削除しました');
        return redirect()->action([UserFavoriteItemsController::class, 'index']);


        // $favoriteItem = UserFavoriteItem::find($id);
        // if (auth()->user()->id != $favoriteItem->user_id) {
        //     return redirect(route('favoriteItem.index'))->with('error', '許可されていない操作です');
        // }

        // $favoriteItem->delete();
        // return redirect(route('favoriteItem.index'))->with('success', '削除しました');
    }
}
