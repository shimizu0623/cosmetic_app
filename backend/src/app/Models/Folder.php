<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->belongsToMany(Item::class, FolderItem::class);
    }

    public function toArray()
    {
        $ingredientScores = $this->items->map(
            function($item) {
                return $item->ingredients->map(function($ingredient) { return $ingredient->score; });
            })->flatten();

        return [
          'id' => $this->id,
          'user_id' => $this->user->id,
          'name' => $this->name,
          'items' => $this->items->map(function($item) { return $item->toArray(); }),
          'green' => $ingredientScores
            ->filter(function($score) { return 1 <= $score && $score <= 2; })
            ->count(),
          'yellow' => $ingredientScores
            ->filter(function($score) { return 3 <= $score && $score <= 6; })
            ->count(),
          'red' => $ingredientScores
            ->filter(function($score) { return 7 <= $score && $score <= 10; })
            ->count(),
          'gray' => $ingredientScores
            ->filter(function($score) { return -1 === $score; })
            ->count(),

        //   'item_id' => $this->items->map(function($item) { return $item->id; }),
        //   'item_img' => $this->items->map(function($item) { return $item->img; }),
        ];
    }
}
