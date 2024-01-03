<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class APIController extends Controller
{
    public function test()
    {
        return response()->json(['message' => 'API Test Successful'], 200);
    }

}
