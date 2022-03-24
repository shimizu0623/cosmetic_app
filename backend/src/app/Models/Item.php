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

    

}
