<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BillingController extends Controller
{
    /**
     * Display the billing page.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Billing');
    }
} 