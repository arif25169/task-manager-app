<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->middleware('auth:sanctum');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store']);
Route::post('/reset-password', [NewPasswordController::class, 'store']);   

Route::post('/email/resend', [EmailVerificationNotificationController::class, 'store']);

Route::get('/sanctum/csrf-cookie', function () {
    return response()->noContent();
});

Route::middleware('auth:sanctum')->get('/health', function () {
    return response()->json([
        'message' => 'Health is okay'
    ], 200);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/tasks', [TaskController::class, 'index']);      // List tasks
    Route::post('/tasks', [TaskController::class, 'store']);     // Create task
    Route::get('/tasks/{id}', [TaskController::class, 'show']);  // Show task
    Route::put('/tasks/{id}', [TaskController::class, 'update']); // Update task
    Route::delete('/tasks/{id}', [TaskController::class, 'destroy']); // Delete task
});

// Route::get('/tasks', [TaskController::class, 'index']);      // List tasks
// Route::post('/tasks', [TaskController::class, 'store']);     // Create task
// Route::get('/tasks/{id}', [TaskController::class, 'show']);  // Show task
// Route::put('/tasks/{id}', [TaskController::class, 'update']); // Update task
// Route::delete('/tasks/{id}', [TaskController::class, 'destroy']); // Delete task