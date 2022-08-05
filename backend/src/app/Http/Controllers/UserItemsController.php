<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserItem;

class UserItemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            UserItem::all()
        );
    }
}