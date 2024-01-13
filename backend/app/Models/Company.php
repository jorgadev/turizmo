<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Job;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'company_name', 'contact_number',
    ];

    public function jobs()
    {
        return $this->hasMany(Job::class, 'company_id', 'user_id');
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}
