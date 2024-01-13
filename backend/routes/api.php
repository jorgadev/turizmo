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

    // Company profile routes
    Route::get('company/me', [CompanyController::class, 'show']);
    Route::put('company/update', [CompanyController::class, 'updateProfile']);

    // Get all jobs
    Route::get('/jobs', [WorkerController::class, 'getJobs']);

    // Get a specific job by ID
    Route::get('/jobs/{id}', [WorkerController::class, 'getJob']);

    // Submit a job application
    Route::post('/application', [WorkerController::class, 'application']);

    // Delete a job application by ID
    Route::delete('/application/{id}', [WorkerController::class, 'deleteApplication']);

    Route::post('/jobs', [CompanyController::class, 'createJob']);

    // Delete a job by ID
    Route::delete('/jobs/{id}', [CompanyController::class, 'deleteJob']);

    // Update a job listing
    Route::put('/jobs', [CompanyController::class, 'updateJob']);

    // Get job applications for a specific job by ID
    Route::get('/jobs/{id}/applications', [CompanyController::class, 'getApplications']);

    // Get a specific job application by ID
    Route::get('/applications/{id}', [CompanyController::class, 'getApplication']);

    // Update a job application
    Route::put('/applications', [CompanyController::class, 'updateApplication']);

});


