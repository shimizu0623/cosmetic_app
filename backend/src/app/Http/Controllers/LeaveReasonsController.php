<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LeaveReason;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO: ↓これなくてもエラー出なかったから要らない？
        // $date = new Carbon();
        $date = Carbon::now(); 

        $validator = Validator::make($request->all(),[
            // ↓TODO: 必須ではない、入力なしokにするにはfrontendに書いてるのでOK？
            'reason' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $create = LeaveReason::create([
            'reason' => $request->reason,
            // ↓TODO: 'leave_date' => Carbon::now(),の方が良い？
            'leave_date' => $date,
        ]);

        return response()->json($create, Response::HTTP_OK);

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
