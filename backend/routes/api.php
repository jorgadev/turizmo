<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkerController;
use App\Http\Controllers\CompanyController;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {
    // Worker profile routes
    Route::get('worker/me', [WorkerController::class, 'show']);
    Route::put('worker/update', [WorkerController::class, 'updateProfile']);
    Route::get('worker/jobs', [WorkerController::class, 'getJobs']);
    Route::get('worker/applications', [WorkerController::class, 'getApplications']);
    Route::get('/jobs/{id}', [WorkerController::class, 'getJob']);
    Route::post('/application', [WorkerController::class, 'application']);

    // Company profile routes
    Route::get('company/me', [CompanyController::class, 'show']);
    Route::put('company/update', [CompanyController::class, 'updateProfile']);
    Route::get('company/jobs', [CompanyController::class, 'getJobs']);
    Route::get('company/applications', [CompanyController::class, 'getApplications']);
    Route::post('/jobs', [CompanyController::class, 'createJob']);
    Route::delete('/jobs/{id}', [CompanyController::class, 'deleteJob']);
    Route::put('/jobs/{id}', [CompanyController::class, 'updateJob']);
    Route::put('/job-done/{id}', [CompanyController::class, 'doneJob']);
    Route::put('/application/{id}', [CompanyController::class, 'updateApplication']);
});


