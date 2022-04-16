<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class UserFavoriteItem extends Model
{
    use HasFactory;


    // public function item()
    // {
    //     return $this->belongsTo(Item::class);
    // }

    protected $fillable = ['user_id', 'item_id'];

}
