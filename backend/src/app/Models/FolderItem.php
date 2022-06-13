<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FolderItem extends Model
{
    use HasFactory;

    protected $fillable = ['folder_id', 'item_id'];
}
