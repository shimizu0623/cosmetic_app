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
    // public function contact()
    // {
    //     return $this->belongsTo(Contact::class);
    // }

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
}
