<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobListing;
use App\Models\JobApplication;
use App\Models\Company;


class CompanyController extends Controller
{

    public function show(Request $request)
    {
        $user = auth()->user();

        // Retrieve company details for the authenticated user
        $company = Company::where('user_id', $user->id)->first();

        if (!$company) {
            return response()->json(['error' => 'Company profile not found.'], 404);
        }

        return response()->json(['company' => $company]);
    }
    
    public function createJob(Request $request){
        $job = new JobListing([
            'company_id' => $request->company_id,
            'title' => $request->title,
            'description' => $request->description,
            'location' => $request->location,
            'wage_offered' => $request->wage_offered,
            'start_time' => $request->start_time,
            'end_time' => $request->start_time,
        ]);

        return response()->json([
            'message' => 'Job created successfully!',
        ]);

    }

    public function deleteJob($id){
        $job = JobListing::find($id);
        $job->delete();

        return response()->json([
            'message' => 'Job deleted!',
        ]);
    }
    //update job listing
    public function updateJob(Request $request){

        $job = JobListing::find($request->id);
        $job->title = $request->title;
        $job->description = $request->description;
        $job->location = $request->location;
        $job->wage_offered = $request->wage_offered;
        $job->start_time = $request->start_time;
        $job->end_time = $request->end_time;
        $job->save();

        return response()->json([
            'message' => 'Job updated successfully!',
        ]);
    }

    public function getJobApplications($id){
        $jobApplications = JobApplication::where('job_id', $id)->get()->toArray();

        return response()->json([
            'jobApplications' => $jobApplications,
        ]);
    }

    public function getJobApplication($id){
        $jobApplication = JobApplication::find($id)->toArray();

        return response()->json([
            'jobApplication' => $jobApplication,
        ]);
    }

    //update job application
    public function updateJobApplication(Request $request){

        $jobApplication = JobApplication::find($request->id);
        $jobApplication->status = $request->status;
        $jobApplication->save();

        return response()->json([
            'message' => 'Job application updated successfully!',
        ]);
    }


}
