<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SkinTrouble;

class SkinTroublesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            SkinTrouble::all()
        );
    }
}