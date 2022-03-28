<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Facades\Log;

class ItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $skinTroubleIds = $request->query('skin_trouble_id');
        $categoryIds = $request->query('category_id');
        $brandIds = $request->query('brand_id');
        // $score = $request->query('score');
        $user = $request->user();

        // Log::debug(print_r($skinTroubleIds, true));

        $items = Item::withSkinTroubles($skinTroubleIds)
        ->withCategories($categoryIds)
        ->withBrand($brandIds);
        // ->excludeUnmatched($user->id)
        // ->withEwgScore(1)
        // ->get();
        
        if (true) {
            $items = $items->safeOnly();
        }
        $items = $items->get();

        return response()->json(
            $items //画面に表示されるアイテム
        );

    }

    public function item()
    {
        $item = Item::find(1);

        return response()->json(
            [
                'id' => $item->id,
                'name' => $item->name,
                'brand' => $item->brand->name,
                'price' => $item->price,
                'img' => $item->img,
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
        //
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
    public function destroy($id)
    {
        //
    }
}
