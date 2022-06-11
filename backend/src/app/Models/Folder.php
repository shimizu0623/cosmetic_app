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

    public function toArray() 
    {
        return [
          'id' => $this->id,
          'user_id' => $this->user->id,
          'name' => $this->name,
        ];
    }
    
}
