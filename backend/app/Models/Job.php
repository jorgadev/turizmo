<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Application;
use App\Models\Company;


class Job extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id', 'title', 'description', 'location', 'date', 'wage_rate',
    ];

    // Define the one-to-many relationship with Application
    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }
}
