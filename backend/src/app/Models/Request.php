<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    // TODO: ↓user_idは書いても大丈夫なのか、
    protected $fillable = ['detail', 'user_id'];

}
