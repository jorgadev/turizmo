<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobListings;
use App\Models\JobApplications;
use App\Models\Worker;

class WorkerController extends Controller
{
    public function show(Request $request)
    {
        $user = auth()->user();

        // Retrieve worker details for the authenticated user
        $worker = Worker::where('user_id', $user->id)->first();

        if (!$worker) {
            return response()->json(['error' => 'Worker profile not found.'], 404);
        }

        return response()->json(['worker' => $worker]);
    }

    public function getJobs()
    {
        $jobs = JobListings::all()->toArray();

         return response()->json(['message' => 'This is a test route']);
    }

    public function getJob($id)
    {
        $job = JobListings::find($id)->toArray();

        return response()->json([
            'job' => $job,
        ]);
    }

    public function jobApplication(Request $request)
    {

        //insert into job_applications table

        $jobApplication = new JobApplications([
            'job_id' => $request->job_id,
            'worker_id' => $request->worker_id,
            'status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Job application successful!',
        ]);
    }

    public function deleteJobApplication($id)
    {
        $jobApplication = JobApplications::find($id);
        $jobApplication->delete();

        return response()->json([
            'message' => 'Job application deleted!',
        ]);
    }

}