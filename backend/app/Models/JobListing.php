<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobListing extends Model
{
    use HasFactory;

    protected $fillable = [
        'manager_id', 'title', 'description', 'location', 'start_time', 'end_time', 'wage_offered',
    ];
}
