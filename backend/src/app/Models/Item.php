<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Item extends Model
{
    use HasFactory;

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

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
        if (empty($skinTroubleIds)){
            return $query;
        }
        return $query->whereIn('items.skin_trouble_id', $skinTroubleIds);
    }

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
            ->leftJoin('user_unmatched_items', function($join) use ($userId)
            {
                $join->on('items.id', '=', 'user_unmatched_items.item_id');
                $join->where('user_unmatched_items.user_id', '=', $userId);
            })
            ->where('user_unmatched_items.item_id', '=', NULL);
    }

    public function scopeWithCategories($query, $categoryIds)
    {
        if (empty($categoryIds)){
            return $query;
        }
        return $query->where('items.category_id', $categoryIds);
    }
    
    public function scopeWithBrand($query, $brandIds)
    {
        if (empty($brandIds)){
            return $query;
        }
        return $query->where('items.brand_id', $brandIds);
    }

    public function scopeWithSkinTypes($query, $skinTypeIds)
    {
        if (empty($skinTypeIds)){
            return $query;
        }
        return $query->where('items.skin_type_id', $skinTypeIds);
    }

    // TODO: ↓toArrayItemIdとtoArrayをひとつにまとめる
    public function toArray() 
    {
        return [
          'id' => $this->id,
        //   'item_id' => $this->item->id, //TODO: 確認(お気に入り・履歴・おすすめ・比較)
          'name' => $this->name,
          'brand' => $this->brand->name,
          'img' => $this->img,
          'price' => $this->price,
          'volume' => $this->volume,
          'memo' => $this->memo,
        ];
    }

    public function toArrayItemId() 
    {
        return [
          'id' => $this->id,
          'name' => $this->name,
          'brand' => $this->brand->name,
          'img' => $this->img,
          'price' => $this->price,
          'volume' => $this->volume,
          'item_id' => $this->item->id,
          'memo' => $this->memo,
        ];
    }

    public function scopeUserFavoriteOnly($query, $userId)
    {
        return $query
        ->leftJoin('user_favorite_items', function($join) use ($userId)
        // ->innerJoin('user_favorite_items', function($join) use ($userId)
        {
            $join->on('items.id', '=', 'user_favorite_items.item_id');
            $join->where('user_favorite_items.user_id', '=', $userId);
        })
        ->where('user_favorite_items.item_id', '!=', NULL);
    }

    public function scopeUserHistory($query, $userId)
    {
        return $query
        ->leftJoin('user_histories', function($join) use ($userId)
        {
            $join->on('items.id', '=', 'user_histories.item_id');
            $join->where('user_histories.user_id', '=', $userId);
        })
        ->where('user_histories.item_id', '!=', NULL);
    }

    public function scopeUserUnmatchedOnly($query, $userId)
    {
        return $query
        ->leftJoin('user_unmatched_items', function($join) use ($userId)
        // ->innerJoin('user_unmatched_items', function($join) use ($userId)
        {
            $join->on('items.id', '=', 'user_unmatched_items.item_id');
            $join->where('user_unmatched_items.user_id', '=', $userId);
        })
        ->where('user_unmatched_items.item_id', '!=', NULL);
    }

    public function scopeUserComparisonItemOnly($query, $userId)
    {
        return $query
        ->leftJoin('user_comparison_items', function($join) use ($userId)
        // ->innerJoin('user_unmatched_items', function($join) use ($userId)
        {
            $join->on('items.id', '=', 'user_comparison_items.item_id');
            $join->where('user_comparison_items.user_id', '=', $userId);
        })
        ->where('user_comparison_items.item_id', '!=', NULL)
        ->select('items.*');
    }

    public function getCommonUnmatchedIngredientsByUser(User $user)
    {
       $unmatchedItemIds = $user->getCommonUnmatchedIngredients();
       return $this->ingredients->filter(function($ingredient) use($unmatchedItemIds) {
           return $unmatchedItemIds->search($ingredient->id) !== false;
       })->values();
    }
};