<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SkinTypeController;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\IngredientsController;
use App\Http\Controllers\ItemIngredientsController;
use App\Http\Controllers\GendersController;
use App\Http\Controllers\SkinTroublesController;

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


Route::get('/skin_types', [SkinTypeController::class, 'index']);
Route::get('/brands', [BrandsController::class, 'index']);
Route::get('/categories', [CategoriesController::class, 'index']);
Route::get('/items', [ItemsController::class, 'index']);
Route::get('/ingredients', [IngredientsController::class, 'index']);
Route::get('/item_ingredients', [ItemIngredientsController::class, 'index']);
Route::get('/genders', [GendersController::class, 'index']);
Route::get('/skin_troubles', [SkinTroublesController::class, 'index']);
// Route::get('/users', [UsersController::class, 'index']);
Route::get('/me', [UsersController::class, 'me']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
