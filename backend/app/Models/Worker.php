<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Job;
use App\Models\Company;
use App\Models\Application;



class Worker extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 'full_name', 'contact_number', 'availability', 'hourly_wage', 'cv', 'daily_application_limit'
    ];

    public function jobs()
    {
        return $this->hasMany(Job::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class, 'worker_id', 'user_id');
    }

    public function companies()
{
    return $this->hasManyThrough(Company::class, Application::class);
}
}
