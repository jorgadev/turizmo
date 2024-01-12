<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jobs;
use App\Models\Applications;
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
        // Retrieve all jobs
        $jobs = Jobs::all();

        // Check if there are jobs
        if ($jobs->isEmpty()) {
            return response()->json(['message' => 'No jobs found.']);
        }

        // Return the list of jobs as JSON response
        return response()->json(['jobs' => $jobs]);
    }

    public function getJob($id)
    {
        $job = Jobs::find($id)->toArray();

        return response()->json([
            'job' => $job,
        ]);
    }

    public function application(Request $request)
    {

        //insert into applications table

        $application = new Applications([
            'job_id' => $request->job_id,
            'worker_id' => $request->worker_id,
            'status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Application successful!',
        ]);
    }

    public function deleteApplication($id)
    {
        $application = applications::find($id);
        $application->delete();

        return response()->json([
            'message' => 'Application deleted!',
        ]);
    }

}