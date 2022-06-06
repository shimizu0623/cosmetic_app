<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class UserHistory extends Model
{
    use HasFactory;

    protected $fillable = ['item_id', 'user_id', 'updated_at'];

}
