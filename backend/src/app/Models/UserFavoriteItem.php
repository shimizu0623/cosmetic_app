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

    // TODO: ↓user_idは書いても大丈夫なのか、
    protected $fillable = ['user_id', 'item_id'];

}
