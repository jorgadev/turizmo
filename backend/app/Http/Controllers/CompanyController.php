<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;
use App\Models\Application;
use App\Models\Company;


class CompanyController extends Controller
{
    // User
    public function show(Request $request)
    {
        $user = auth()->user();
        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['error' => 'Company profile not found.'], 404);
        }
        return response()->json(['company' => $company]);
    }

    public function updateProfile(Request $request)
    {
        $user = auth()->user();
        $company = Company::where('user_id', $user->id)->first();

        $company->update([
            'company_name' => $request->input('companyName'),
            'contact_number' => $request->input('contactNumber'),
        ]);

        return response()->json(['message' => 'Profile updated successfully']);
    }


    // Job
    public function getJobs()
    {
        $user = auth()->user();
        $company = Company::where('user_id', $user->id)->first();
        if (!$company) {
            return response()->json(['error' => 'Company profile not found.'], 404);
        }
        $jobs = $company->jobs;
        return response()->json(['jobs' => $jobs]);
    }

    public function createJob(Request $request){
        $job = new Job([
            'company_id' => $request->company_id,
            'title' => $request->title,
            'description' => $request->description,
            'location' => $request->location,
            'wage_rate' => $request->wage_rate,
            'date' => $request->date,
        ]);
        $job->save();
        return response()->json([
            'message' => 'Job created successfully!',
        ]);

    }

    public function deleteJob($id){
        $job = Job::find($id);
    
        if (!$job) {
            return response()->json(['error' => 'Job not found.'], 404);
        }
    
        // Delete all associated applications first
        $job->applications()->delete();
    
        // Now, delete the job
        $job->delete();
    
        return response()->json([
            'message' => 'Job and associated applications deleted successfully!',
        ]);
    }

 

    
    // Application
    public function getApplications()
    {
        $user = auth()->user();
        $company = Company::where('user_id', $user->id)->first();

        if (!$company) {
            return response()->json(['error' => 'Company profile not found.'], 404);
        }

        // Retrieve applications with the same company_id as the user's user_id
        $applications = Application::where('company_id', $user->id)->with('job', 'worker')->get();

        return response()->json(['applications' => $applications]);
    }

    public function getApplication($id){
        $application = Application::find($id)->toArray();
        return response()->json([
            'application' => $application,
        ]);
    }

    public function updateApplication(Request $request, $id){
        $application = Application::find($id);
        $application->status = $request->status;
        $application->save();
        return response()->json([
            'message' => 'Application updated successfully!',
        ]);
    }

    public function updateJob(Request $request, $id)
    {
        $job = Job::find($id);

        if (!$job) {
            return response()->json(['error' => 'Job not found.'], 404);
        }

        // Update job fields based on the request
        $job->update($request->all());

        return response()->json([
            'message' => 'Job updated successfully!',
        ]);
    }

}
