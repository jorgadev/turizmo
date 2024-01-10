<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobListing;
use App\Models\JobApplication;

class WorkerController extends Controller
{
    public function show(Request $request)
    {
        $user = auth()->user();
        return response()->json(['user' => $user]);
    }

    public function getJobs()
    {
        $jobs = JobListing::all()->toArray();

         return response()->json(['message' => 'This is a test route']);
    }

    public function getJob($id)
    {
        $job = JobListing::find($id)->toArray();

        return response()->json([
            'job' => $job,
        ]);
    }

    public function jobApplication(Request $request)
    {
        
        //insert into job_applications table

        $jobApplication = new JobApplication([
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
        $jobApplication = JobApplication::find($id);
        $jobApplication->delete();

        return response()->json([
            'message' => 'Job application deleted!',
        ]);
    }

}
