<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\UserHistory;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;

class UserHistoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $histories = Item::userHistory($user->id)
        ->orderBy('user_histories.updated_at', 'desc')
        ->paginate(10);

        return response()->json(
            $histories->map(function ($history) {
                return $history->toArray();
            })
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
        $user = $request->user();
        $date = \Carbon\Carbon::now();
        $histories = UserHistory::where('user_id', $user->id)
            ->where('item_id', $request->item_id)
            ->get();
        $history = $histories->first();
        $validator = Validator::make($request->all(),[
            'item_id' => 'required',
        ]);

        if ($validator->fails()){
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        if ($history !== null){
            // Log::debug('check'. $history);
            $history->update(['updated_at' => $date]);
            return response()->json($history, Response::HTTP_OK);
        }

        $create = UserHistory::create([
            'user_id' => $user->id,
            'item_id' => $request->item_id,
        ]);

        return response()->json($create, Response::HTTP_OK);
    }
}