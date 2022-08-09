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
        $user = $request->user();
        $isMatchingOnly = $request->query('is_matching_only') === '1';
        $isSafeOnly = $request->query('is_safe_only') === '1';
        $items = Item::withSkinTroubles($skinTroubleIds)
        ->withCategories($categoryIds)
        ->withBrand($brandIds)
        ->withSkinTypes($skinTypeIds);
        
        if ($isSafeOnly){
            $items = $items->safeOnly();
        }
        
        if ($isMatchingOnly){
            $items = $items->matchingOnly($user->id);
        }

        $items = $items->get(['items.*']);

        return response()->json(
            $items->map(function ($item) {
                return $item->toArray();
            })
        );
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
        $item = Item::find($id);
        $folders = $user->folders->map(function($folder) use ($id) {
            return [
                'id' => $folder->id,
                'name' => $folder->name,
                'has_item' => $folder->items->where('id', $id)->count() > 0,
            ];
        });
        
        return response()->json(
            [
                'id' => $item->id,
                'name' => $item->name,
                'brand' => $item->brand->name,
                'price' => $item->price,
                'category' => $item->category->name,
                'volume' => $item->volume,
                'link' => $item->link,
                'img' => $item->img,
                'ingredients' => $item->ingredients->map(function($ingredient) { return $ingredient->toArray(); }),
                'isFavorite' => $user->favorites()->where("user_favorite_items.item_id", $item->id)->count() > 0,
                'folders' => $folders,
                'isUnmatched' => $user->unmatched()->where("user_unmatched_items.item_id", $item->id)->count() > 0,
                'isComparison' =>$user->comparisonItems()->where("user_comparison_items.item_id", $item->id)->count() > 0,
                'unmatched_ingredients' => $item->getCommonUnmatchedIngredientsByUser($user),
            ]
        );
    }
}