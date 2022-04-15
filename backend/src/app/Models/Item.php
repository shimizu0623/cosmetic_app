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

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function ingredients()
    {
        return $this->belongsToMany(Ingredient::class, ItemIngredient::class);
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


    // public function scopeWithEwgScore($query, $score)
    // {
    //     if(empty($score)){
    //         return $query;
    //     }
    //     return $query
    //         ->join('item_ingredients', 'items.id', '=', 'item_ingredients.item_id')
    //         ->join('ingredients', 'item_ingredients.ingredient_id', '=', 'ingredients.id')
    //         ->where('ingredients.score', 1);

    // }↓↓↓
    public function scopeSafeOnly($query)
    {
        $subquery = <<<SQL
        select distinct item_ingredients.item_id from `item_ingredients`
        inner join `ingredients` on `item_ingredients`.`ingredient_id` = `ingredients`.`id`
        where `ingredients`.`score` > 1
        SQL;
        return $query
            ->leftJoinSub($subquery, 'danger_list', 'items.id', 'danger_list.item_id')
            ->where('danger_list.item_id', '=', NULL);
    }


    public function scopeMatchingOnly($query, $userId)
    {
        return $query
            // ->leftJoin('user_unmatched_items', 'items.id', '=', 'user_unmatched_items.item_id')
            ->leftJoin('user_unmatched_items', function($join) use ($userId)
            {
                $join->on('items.id', '=', 'user_unmatched_items.item_id');
                $join->where('user_unmatched_items.user_id', '=', $userId);
            })
            // ->where('user_unmatched_items.user_id', $userId)
            ->where('user_unmatched_items.item_id', '=', NULL);
    }

    public function scopeWithCategories($query, $categoryIds)
    {
        if(empty($categoryIds)){
            return $query;
        }
        // TODO: ↓複数[]で受け取るからwhereIn?
        return $query->where('items.category_id', $categoryIds);
    }
    
    public function scopeWithBrand($query, $brandIds)
    {
        if(empty($brandIds)){
            return $query;
        }
        return $query->where('items.brand_id', $brandIds);
    }

    public function scopeWithSkinTypes($query, $skinTypeIds)
    {
        if(empty($skinTypeIds)){
            return $query;
        }
        // TODO: ↓複数[]で受け取るからwhereIn?
        return $query->where('items.skin_type_id', $skinTypeIds);
    }


    public function toArray() 
    {
        return [
          'id' => $this->id,
          'name' => $this->name,
          'brand' => $this->brand->name,
          'img' => $this->img,
        ];
    }






    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeUserFavoriteOnly($query, $userId)
    {
        return $query
        ->leftJoin('user_favorite_items', function($join) use ($userId)
        {
            $join->on('items.id', '=', 'user_favorite_items.item_id');
            $join->where('user_favorite_items.user_id', '=', $userId);
        })
        ->where('user_favorite_items.item_id', '!=', NULL);
        // TODO: ↑複数[]で受け取るからwhereIn?
    }

    // public function toArrayFavorite()
    // {
    //     return[
    //         'id' => $this->id,
    //         'user' => $this->user->name,
    //         'name' => $this->name,
    //         'brand' => $this->brand,
    //         'img' => $this->img,
    //     ];
    // }




    public function scopeUserHistory($query, $userId)
    {
        return $query
        ->leftJoin('user_histories', function($join) use ($userId)
        {
            $join->on('items.id', '=', 'user_histories.item_id');
            $join->where('user_histories.user_id', '=', $userId);
        })
        ->where('user_histories.item_id', '!=', NULL);
        // TODO: ↑複数[]で受け取るからwhereIn?
    }






}
