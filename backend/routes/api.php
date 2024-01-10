<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkerController;

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
    Route::get('worker/me', [WorkerController::class, 'show']);
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('company/me', [CompanyController::class, 'show']);
});

Route::middleware(['auth:sanctum'])->group(function () {

    // Get all jobs
    Route::get('/jobs', [WorkerController::class, 'getJobs']);

    // Get a specific job by ID
    Route::get('/jobs/{id}', [WorkerController::class, 'getJob']);

    // Submit a job application
    Route::post('/job-application', [WorkerController::class, 'jobApplication']);

    // Delete a job application by ID
    Route::delete('/job-application/{id}', [WorkerController::class, 'deleteJobApplication']);

    Route::post('/jobs', [CompanyController::class, 'createJob']);

    // Delete a job by ID
    Route::delete('/jobs/{id}', [CompanyController::class, 'deleteJob']);

    // Update a job listing
    Route::put('/jobs', [CompanyController::class, 'updateJob']);

    // Get job applications for a specific job by ID
    Route::get('/jobs/{id}/job-applications', [CompanyController::class, 'getJobApplications']);

    // Get a specific job application by ID
    Route::get('/job-applications/{id}', [CompanyController::class, 'getJobApplication']);

    // Update a job application
    Route::put('/job-applications', [CompanyController::class, 'updateJobApplication']);

});


