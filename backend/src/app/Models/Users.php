<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;
    public function skin_type()
    {
        return $this->belongsTo(SkinType::class);
    }
    public function gender()
    {
        return $this->belongsTo(Genders::class);
    }

    public function birthday_string() {
        $today = date('Ymd');
        $birthday = $this->birth_date;
        $birthday = str_replace("-", "", $birthday);
        $age = floor(($today - $birthday) / 100000);
        if($age < 1){
            return '10歳以下';
        }else{
            return $age . '0代'; //11歳以上から
        }
    }
}
