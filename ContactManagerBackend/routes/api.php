<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ContactController;


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});


Route::get('/getContacts', [ContactController::class, 'getContacts']);

Route::post('/createContact', [ContactController::class, 'createContact']);

    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();});
    // });
    // Route::middleware('auth:api')->group(function () {

    // Route::get('/contactsShow/{id}', [ContactController::class, 'show']);
    // Route::put('/contactsUpdate/{id}', [ContactController::class, 'update']);
    // Route::delete('/contactsDestroy/{id}', [ContactController::class, 'destroy']);
// });
