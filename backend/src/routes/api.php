<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SkinTypeController;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\IngredientsController;
use App\Http\Controllers\ItemIngredientsController;
use App\Http\Controllers\GendersController;
use App\Http\Controllers\SkinTroublesController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\UserContactsController;
use App\Http\Controllers\UserFavoriteItemsController;
use App\Http\Controllers\UserHistoriesController;
use App\Http\Controllers\UserItemsController;
use App\Http\Controllers\UserUnmatchedItemsController;
use App\Http\Controllers\UserComparisonItemsController;
use App\Http\Controllers\LeaveReasonsController;
use App\Http\Controllers\RequestsController;
use App\Http\Controllers\ReasonsController;
use App\Http\Controllers\ReviewsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::resource('genders', GendersController::class, ['only' => ['index']]);
Route::resource('skin_types', SkinTypeController::class, ['only' => ['index']]);

Route::middleware('auth:sanctum')->group(function(){
    
    // Route::get('/users', [UsersController::class, 'index']);
    Route::post('/me', [UsersController::class, 'updateMe']);    
    Route::post('/delete_me', [UsersController::class, 'deleteMe']);    
    Route::get('/me', [UsersController::class, 'me']);    
    Route::get('/me/{id}', [UsersController::class, 'show']);
    Route::resource('brands', BrandsController::class, ['only' => ['index']]);
    Route::resource('categories', CategoriesController::class, ['only' => ['index']]);
    Route::resource('ingredients', IngredientsController::class, ['only' => ['index']]);
    Route::resource('item_ingredients', ItemIngredientsController::class, ['only' => ['index']]);
    Route::resource('skin_troubles', SkinTroublesController::class, ['only' => ['index']]);
    Route::resource('contacts', ContactsController::class, ['only' => ['index']]);
    Route::resource('user_contacts', UserContactsController::class, ['only' => ['index']]);
    Route::resource('user_favorites', UserFavoriteItemsController::class, ['only' => ['index', 'store', 'destroy']]);
    Route::resource('user_histories', UserHistoriesController::class, ['only' => ['index', 'store']]);
    Route::resource('user_items', UserItemsController::class, ['only' => ['index']]);
    Route::resource('user_unmatchedItems', UserUnmatchedItemsController::class,['only' => ['index', 'store', 'destroy']]);
    Route::resource('user_comparisonItems', UserComparisonItemsController::class,['only' => ['index', 'store', 'destroy']]);
    Route::resource('leave_reasons', LeaveReasonsController::class,['only' => ['index', 'store']]);
    Route::resource('requests', RequestsController::class, ['only' => ['store']]);
    Route::resource('reasons', ReasonsController::class, ['only' => ['index']]);
    Route::resource('reviews', ReviewsController::class, ['only' => ['index', 'store', 'destroy']]);
    // TODO: ↓recommendItem？
    Route::get('/recommendItem', [ItemsController::class, 'recommendItem']);
    Route::get('/items/{id}', [ItemsController::class, 'show']);
    
    // Route::get('/items', [ItemsController::class, 'index']);
    // Route::get('/items/{id}', [ItemsController::class, 'show']);
    // ↓TODO: 調べる
    Route::resource('items', ItemsController::class, ['only' => ['index', 'show']]);
    
});