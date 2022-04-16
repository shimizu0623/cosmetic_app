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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $now = Carbon::now()->toDateString();

        $validator = Validator::make($request->all(),[
            // ↓TODO: reason必須ではないので、入力なしでもokにするには？
            'reason' => 'required',
            // ↓TODO: 日付はここで取得する？$nowみたいなものを使う？
            'leave_date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $create = LeaveReason::create([
            'reason' => $request->reason,
            'leave_date' => $request->leave_date,
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
