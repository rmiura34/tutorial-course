<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\CrawlRun;
use Illuminate\Contracts\View\View;

class CompanyController extends Controller
{
    public function index(): View
    {
        return view('companies.index', [
            'companies' => Company::query()->latest()->paginate(10),
            'latestRun' => CrawlRun::query()->latest()->first(),
        ]);
    }
}
