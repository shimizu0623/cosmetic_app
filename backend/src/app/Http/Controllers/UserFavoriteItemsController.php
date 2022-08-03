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

        $favorites = Item::userFavoriteOnly($user->id)
        ->get();

        return response()->json(
            $favorites->map(function ($favorite) {
                return $favorite->toArray();
            })
        );

        // $user = $request->user();

        // // TODO: innerJoinエラー確認
        // $favorites = $user->getFavoriteItems();

        // return response()->json(
        //     $favorites->map(function ($favorite) {
        //         return $favorite->toArray();
        //     })
        // );
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

        $favorite = UserFavoriteItem::where('user_id', $user->id)
            ->where('item_id', $request->item_id)
            ->get();
        
        if ($favorite->count() !== 0){
            return response()->json(['message' => '既にお気に入り登録されています'],
            Response::HTTP_BAD_REQUEST);
        }
        
        UserFavoriteItem::create([
            'user_id' => $user->id,
            'item_id' => $request->item_id,
        ]);

        // return response()->json($favorite, Response::HTTP_OK);
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

        // TODO: ↓->delete()がつくから->get()はいらない？
        $favorite = UserFavoriteItem::where('item_id', $itemId)->where('user_id', $user->id);

        if ($favorite->count() === 0){
            return response()->json(['message' => 'お気に入り登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        $favorite->delete();
        return response()->noContent();

        // TODO: redirect？？redirectだからできなかった？
        // return redirect()->action([UserFavoriteItemsController::class, 'index']);
        // return redirect('/')->with('success', '削除しました');


        // $favoriteItem = UserFavoriteItem::find($id);
        // if (auth()->user()->id != $favoriteItem->user_id) {
        //     return redirect(route('favoriteItem.index'))->with('error', '許可されていない操作です');
        // }

        // $favoriteItem->delete();
        // return redirect(route('favoriteItem.index'))->with('success', '削除しました');
    }
}
