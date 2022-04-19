<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LeaveReason;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class LeaveReasonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            LeaveReason::all()
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
}
