<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ImportController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('companies.index');
});

Route::get('/companies', [CompanyController::class, 'index'])->name('companies.index');
Route::post('/imports/demo', [ImportController::class, 'store'])->name('imports.demo');
