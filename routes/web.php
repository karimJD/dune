<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BillingController;

Route::get('/', function () {
    return view('welcome');
});

// Billing routes
Route::get('/billing', [BillingController::class, 'index'])->name('billing.index');
