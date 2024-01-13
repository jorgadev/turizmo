<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Worker;
use App\Models\Job;
use App\Models\Application;

class WorkerController extends Controller
{

    // User
    public function show(Request $request)
    {
        $user = auth()->user();
        $worker = Worker::where('user_id', $user->id)->first();
        if (!$worker) {
            return response()->json(['error' => 'Worker profile not found.'], 404);
        }
        return response()->json(['worker' => $worker]);
    }

    public function updateProfile(Request $request)
    {
        $user = auth()->user();
        $worker = Worker::where('user_id', $user->id)->first();
        $worker->update([
            'full_name' => $request->input('fullName'),
            'contact_number' => $request->input('contactNumber'),
            'hourly_wage' => $request->input('hourlyWage'),
            'availability' => $request->input('availability'),
            'cv' => $request->input('cv'),
        ]);
        return response()->json(['message' => 'Profile updated successfully']);
    }


    // Job
    public function getJobs()
    {
        $jobs = Job::all();
        if ($jobs->isEmpty()) {
            return response()->json(['message' => 'No jobs found.']);
        }
        return response()->json(['jobs' => $jobs]);
    }

    public function getJob($id)
    {
        $job = Job::find($id)->toArray();
        return response()->json([
            'job' => $job,
        ]);
    }

    // Application
    public function application(Request $request)
    {
        $application = new Application([
            'job_id' => $request->job_id,
            'worker_id' => $request->worker_id,
            'status' => 'pending',
        ]);
        $application->save();
        return response()->json([
            'message' => 'Application successful!',
        ]);
    }

    public function deleteApplication($id)
    {
        $application = Application::find($id);
        $application->delete();
        return response()->json([
            'message' => 'Application deleted!',
        ]);
    }
}