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
        $skinTypeIds = $request->query('skin_type_id');

        // $score = $request->query('score');
        $user = $request->user();
        $isMatchingOnly = $request->query('is_matching_only') === '1';
        $isSafeOnly = $request->query('is_safe_only') === '1';

        // Log::debug(print_r($skinTroubleIds, true));

        $items = Item::withSkinTroubles($skinTroubleIds)
        ->withCategories($categoryIds)
        ->withBrand($brandIds)
        ->withSkinTypes($skinTypeIds);

        // ->excludeUnmatched($user->id);
        // ->withEwgScore(1)
        // ->get();
        
        if ($isSafeOnly) {
            // Log::debug('if'. $isSafeOnly);
            $items = $items->safeOnly();
        }
        
        if ($isMatchingOnly) {
            // Log::debug('if'. $);
            $items = $items->matchingOnly($user->id);
        }
        
        // Log::debug($items->toSql());
        // Log::debug($user->id);

        // TODO: ↓ホームはpaginateして、検索結果はページ？カルーセル？を切り替えて全て見られるようにする
        $items = $items->get(['items.*']);

        return response()->json(
            $items->map(function ($item) {
                return $item->toArray();
            })
        );
    }

    // public function item()
    // {
    //     $item = Item::find(1);

    //     return response()->json(
    //         [
    //             'id' => $item->id,
    //             'name' => $item->name,
    //             'brand' => $item->brand->name,
    //             'price' => $item->price,
    //             'category' => $item->category->name,
    //             'volume' => $item->volume,
    //             'img' => $item->img,
    //         ]
    //     );
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Item::find($id);

        
        return response()->json(
            [
                'id' => $item->id,
                'name' => $item->name,
                'brand' => $item->brand->name,
                'price' => $item->price,
                'category' => $item->category->name,
                'volume' => $item->volume,
                'img' => $item->img,
                'ingredients' => $item->ingredients->map(function($ingredient) { return $ingredient->toArray(); }),
            ]
        );
    }

}
