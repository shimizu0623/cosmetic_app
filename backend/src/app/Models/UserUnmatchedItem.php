<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserUnmatchedItem extends Model
{
    use HasFactory;
    
    protected $fillable = ['user_id', 'item_id', 'memo'];
}