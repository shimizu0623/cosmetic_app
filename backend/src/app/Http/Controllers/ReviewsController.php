<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\Review;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;


class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $itemIds = $request->query('item_id');
        $user = $request->user();

        $reviews = Review::withItems($itemIds);

        $reviews = $reviews->get(['reviews.*']);
        
        // Log::debug('check'. $reviews);


        return response()->json(
            $reviews->map(function ($review) {
                return $review->toArray();
            })
        );

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $user = $request->user()->id;
        $date = \Carbon\Carbon::now();

        $validator = Validator::make($request->all(),[
            'skin_type_id' => 'required',
            'review' => 'required',
            'star' => 'required',
            // 'posted_date' => 'required',
            'item_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()], 
            Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $review = Review::where('user_id', $user)->where('item_id', $id)->get();
        
        if ($review->count() !== 0){
            return response()->json(['既に口コミが登録されています'],
            Response::HTTP_BAD_REQUEST);
        }

        $create = Review::create([
            'user_id' => $user,
            // 'name' => $user->name,
            'skin_type_id' => $request->skin_type_id,
            'review' => $request->review,
            'star' => $request->star,
            'posted_date' => $date,
            'item_id' => $id,
        ]);

        return response()->noContent();
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $user = $request->user()->id;

        // TODO: ↓userはnullableなので削除できない？
        // $review = Review::where('user_id', $user->id)->where('id', $id);
        $review = Review::where('user_id', $user)->where('item_id', $id);

        if ($review->count() === 0){
            return response()->json(['message' => '口コミが登録されていません'],
            Response::HTTP_NOT_FOUND);
        }

        $review->delete();
        return response()->noContent();
    }
}
