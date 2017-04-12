<?php
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

Route::get('purchases', '\App\Api\Controllers\PurchasesController@get');
Route::post('purchases', '\App\Api\Controllers\PurchasesController@store');
