<?php

use App\Http\Controllers\Api\LogDailyController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/register", [UserController::class, "register"]);
Route::post("/login", [UserController::class, "login"]);

Route::group([
    "middleware" => ["auth:api"]
], function(){

    Route::controller(LogDailyController::class)->group(function(){
        Route::get("/log-daily/{id}", [LogDailyController::class, "index"]);
        Route::post("/log-daily", [LogDailyController::class, "store"]);
        Route::post("/log-daily/update/{id}", [LogDailyController::class, "update"]);
        Route::delete("/log-daily/delete/{id}", [LogDailyController::class, "destroy"]);
        Route::post("/log-daily/status/{id}", [LogDailyController::class, "updateStatus"]);
    });

    Route::get("/get-pegawai", [UserController::class, "getPegawai"]);
    Route::post("/logout", [UserController::class, "logout"]);
});
