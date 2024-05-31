<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PromotionController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Auth routes
Route::group([
    'middleware' => 'api',
  
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

// Admin routes
Route::group(['middleware' => ['api', 'auth:api', 'role:admin']], function () {
    
});

// User routes
Route::group(['middleware' => ['api', 'auth:api']], function () {
    Route::apiResource('products', ProductController::class);
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::put('/profile', [ProfileController::class, 'update']);
    Route::get('products-with-promotions', [PromotionController::class, 'index']);
    Route::get('/profile/orders/{userId}', [ProfileController::class, 'userOrders']);
    Route::delete('/profile/orders/{orderId}', [ProfileController::class, 'destroy']);
});
