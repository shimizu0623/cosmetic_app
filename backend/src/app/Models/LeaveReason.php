<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveReason extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'reason', 'leave_date'];

}
