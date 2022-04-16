<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class User extends Authenticatable
    {
    // use HasFactory;
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = ['name','gender_id','birth_date','email','password','skin_type_id','contact_id'];

    public function skin_type()
    {
        return $this->belongsTo(SkinType::class);
    }
    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }
    public function unmatchedItems()
    {
        return $this->belongsToMany(UnmatchedItem::class, UserUnmatchedItem::class);
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
            // 'gender_name' => $this->gender()->name,
            'skin_type_name' => $this->skin_type->name,
            'skin_type_id' => $this->skin_type->id,
            // 'skin_type_name' => $this->skin_type()->name,
        ];
    }

    public function getFavoriteItems() {
        return Item::userFavoriteOnly($this->id)
              ->get();
    }
    
}
