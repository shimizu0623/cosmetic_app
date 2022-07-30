<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserFavoriteItem;
use App\Models\Item;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class RankingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {

        // $favoriteItems = UserFavoriteItem::withCount('favoriteItems')
        //     ->orderBy('favoriteItems_count', 'desc');

        $favoriteItems = DB::table('user_favorite_items')
            ->join('items', 'user_favorite_items.item_id', '=', 'items.id')
            ->select('user_favorite_items.item_id', 'items.*')
            ->groupBy('item_id')
            ->orderBy(\DB::raw('count(item_id)'), 'DESC')
            ->limit(3);

        $skinTypeIds = $request->query('skin_type_id');

        if ($skinTypeIds){
            $favoriteItems = $favoriteItems->where('items.skin_type_id', $skinTypeIds);
        }

        return $favoriteItems->get();

    }

}