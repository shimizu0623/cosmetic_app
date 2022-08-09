<?php

namespace App\Models;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
    {
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = ['name','gender_id','birth_date','email','password','skin_type_id','contact_id'];

    public static function boot()
    {
        parent::boot();

        self::deleting(function (User $user) {
            foreach ($user->favorites as $favorite)
            {
                $favorite->delete();
            }
            foreach ($user->unmatched as $unmatched)
            {
                $unmatched->delete();
            }
            foreach ($user->histories as $history)
            {
                $history->delete();
            }
            // foreach ($user->histories as $history)
            // {
            //     $history->delete();
            // }
            // ↑TODO:comparisonのものも作る

            // TODO: ↓user_idなしのテーブル作成後削除する
            foreach ($user->requests as $request)
            {
                $request->delete();
            }
        });
    }

    public function favorites()
    {
        return $this->hasMany(UserFavoriteItem::class);
    }

    public function unmatched()
    {
        return $this->hasMany(UserUnmatchedItem::class);
    }

    public function histories()
    {
        return $this->hasMany(UserHistory::class);
    }
    
    public function comparisonItems()
    {
        return $this->hasMany(UserComparisonItem::class);
    }
    
    // TODO: ↓user_idなしのテーブル作成後削除する
    public function requests()
    {
        return $this->hasMany(Request::class);
    }

    public function folders()
    {
        return $this->hasMany(Folder::class);
    }

    public function unmatchedItems()
    {
        return $this->belongsToMany(Item::class, UserUnmatchedItem::class);
    }

    public function skin_type()
    {
        return $this->belongsTo(SkinType::class);
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    public function birthday_string() {
        $today = date('Ymd');
        $birthday = $this->birth_date;
        $birthday = str_replace("-", "", $birthday);
        $age = floor(($today - $birthday) / 100000);
        if($age < 1){
            return '10歳以下';
        }else{
            return $age . '0代';
        }
    }

    public function toArray() 
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'birthday_string' => $this->birthday_string(),
            'birth_date' => $this->birth_date,
            'gender_name' => $this->gender->name,
            'skin_type_name' => $this->skin_type->name,
            'skin_type_id' => $this->skin_type->id,
        ];
    }

    public function getFavoriteItems() {
        return Item::userFavoriteOnly($this->id)
            ->get();
    }
    
    public function getPossibleUnmatchedIngredients()
    {
        return $this
            ->unmatchedItems
            ->map(function($item) {
                return $item->ingredients->pluck('id');
            })
            ->flatten()
            ->unique();
    }

    public function getCommonUnmatchedIngredients()
    {
        $ingredientsGroupedByItems = $this
            ->unmatchedItems
            ->map(function($item) {
                return $item->ingredients->pluck('id');
            });
        $possibleUnmatchedIngredients = $this->getPossibleUnmatchedIngredients();

        return $possibleUnmatchedIngredients->filter(function($ingredientId) use ($ingredientsGroupedByItems) {
          return $ingredientsGroupedByItems->every(function($ingredientIds) use ($ingredientId) {
            return $ingredientIds->contains($ingredientId);
          });
        })->values();
    }

    public function getCommonUnmatchedIngredientNames()
    { 
        $ids = $this->getCommonUnmatchedIngredients();
        $ingredients = Ingredient::where('id', $ids);
        
        if (empty($ids)){
            return [];
        }
        return $ingredients->pluck('name');
    }
}