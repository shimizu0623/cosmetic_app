<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Item extends Model
{
    use HasFactory;

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function scopeWithSkinTroubles($query, $skinTroubleIds)
    {
        if(empty($skinTroubleIds)){
            return $query;
        }
        // Log::debug(print_r($skinTroubleIds, true));

        // return $query->whereIn('skin_trouble_id', [2, 3] );
        return $query->whereIn('items.skin_trouble_id', $skinTroubleIds);
    }

    public function scopeWithEwgScore($query, $score)
    {
        if(empty($score)){
            return $query;
        }
        return $query
            ->join('item_ingredients', 'items.id', '=', 'item_ingredients.item_id')
            ->join('ingredients', 'item_ingredients.ingredient_id', '=', 'ingredients.id')
            ->where('ingredients.score', 1);
    }

    public function scopeExcludeUnmatched($query, $userId)
    {
        // if(empty($score)){
        //     return $query;
        // }
        return $query
            // ->leftJoin('user_unmatched_items', 'items.id', '=', 'user_unmatched_items.item_id')
            ->leftJoin('user_unmatched_items', function($join)
            {
                $join->on('items.id', '=', 'user_unmatched_items.item_id');
                // $join->on($userId, '=', 'user_unmatched_items.user_id');
            })
            ->where('user_unmatched_items.user_id', $userId)
            ->where('user_unmatched_items.item_id', '=', NULL);
    }

    public function scopeWithCategories($query, $categoryIds)
    {
        if(empty($categoryIds)){
            return $query;
        }
        return $query->where('items.category_id', $categoryIds);
    }
    
    public function scopeWithBrand($query, $brandIds)
    {
        if(empty($brandIds)){
            return $query;
        }
        return $query->where('items.brand_id', $brandIds);
    }

    

}
