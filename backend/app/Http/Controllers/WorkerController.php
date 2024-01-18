<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Worker;
use App\Models\Job;
use App\Models\Application;
use App\Models\Company;

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
    public function getJobs(Request $request)
    {
        $user = auth()->user();
        $worker = Worker::where('user_id', $user->id)->first();
    
        // Get active jobs that the user hasn't applied for
        $jobs = Job::where('is_active', 1)
        ->whereDoesntHave('applications', function ($query) use ($worker) {
            $query->where('worker_id', $worker->user_id);
        })->with('company')->get();
    
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
    public function getApplications()
    {
        $user = auth()->user();
        $worker = Worker::where('user_id', $user->id)->first();

        if (!$worker) {
            return response()->json(['error' => 'Worker profile not found.'], 404);
        }

        $applications = $worker->applications()->with('job.company')->get();

        return response()->json(['applications' => $applications]);
    }

    public function application(Request $request)
    {
        $user = auth()->user();
        $worker = Worker::where('user_id', $user->id)->first();

        // Check if the daily limit is reached
        if ($worker->daily_application_limit <= 0) {
            return response()->json(['error' => 'Daily application limit reached.'], 400);
        }

        $job = Job::find($request->job_id);

        if (!$job) {
            return response()->json(['error' => 'Job not found.'], 404);
        }

        $application = new Application([
            'job_id' => $job->id,
            'worker_id' => $request->worker_id,
            'company_id' => $job->company_id, 
            'status' => 'pending',
        ]);


        $application->save();

        $worker->decrement('daily_application_limit');

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