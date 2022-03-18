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
use App\Http\Controllers\UserItemsController;
use App\Http\Controllers\RequestTextsController;
use App\Http\Controllers\ReasonsController;

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

Route::middleware('auth:sanctum')->group(function(){
    
    Route::get('/skin_types', [SkinTypeController::class, 'index']);
    Route::get('/brands', [BrandsController::class, 'index']);
    Route::get('/categories', [CategoriesController::class, 'index']);
    // Route::get('/items', [ItemsController::class, 'index']);
    Route::get('/ingredients', [IngredientsController::class, 'index']);
    Route::get('/item_ingredients', [ItemIngredientsController::class, 'index']);
    Route::get('/genders', [GendersController::class, 'index']);
    Route::get('/skin_troubles', [SkinTroublesController::class, 'index']);
    Route::get('/contacts', [ContactsController::class, 'index']);
    Route::get('/user_contacts', [UserContactsController::class, 'index']);
    Route::get('/user_items', [UserItemsController::class, 'index']);
    // Route::get('/users', [UsersController::class, 'index']);
    Route::post('/me', [UsersController::class, 'updateMe']);    
    Route::get('/me', [UsersController::class, 'me']);    
    Route::get('/item', [ItemsController::class, 'item']);    
    Route::get('/requests', [RequestTextsController::class, 'index']);    
    Route::get('/reasons', [ReasonsController::class, 'index']);    
    
});