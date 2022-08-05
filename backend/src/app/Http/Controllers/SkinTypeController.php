<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SkinType;

class SkinTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            SkinType::all()
        );
    }
}