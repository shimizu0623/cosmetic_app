<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;

class Review extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'review', 'star', 'posted_date', 'item_id', 'skin_type_id'];

    public function review()
    {
        return $this->belongsTo(Review::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function skin_type()
    {
        return $this->belongsTo(SkinType::class);
    }

    public function scopeWithItems($query, $itemIds)
    {
        // Log::debug(print_r($itemIds, true));

        return $query->where('reviews.item_id', $itemIds);
    }

    public function toArray() 
    {
        return [
          'id' => $this->id,
          'user_id' => $this->user->id,
          'name' => $this->user->name,
          'skin_type_id' => $this->skin_type->id,
          'skin_type' => $this->skin_type->name,
          'review' => $this->review,
          'star' => $this->star,
          'posted_date' => $this->posted_date,
          'item_id' => $this->item->id,
        ];
    }

}
