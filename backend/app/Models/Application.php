<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Worker;
use App\Models\Job;


class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_id', 'worker_id', 'status', // Add other columns as needed
    ];

    // Define the inverse relationship with Job
    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    // Define the inverse relationship with Worker
    public function worker()
    {
        return $this->belongsTo(Worker::class);
    }
}
