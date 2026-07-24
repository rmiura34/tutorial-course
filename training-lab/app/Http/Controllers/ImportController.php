<?php

namespace App\Http\Controllers;

use App\Services\CompanyImportService;
use Illuminate\Http\RedirectResponse;

class ImportController extends Controller
{
    public function store(CompanyImportService $service): RedirectResponse
    {
        $run = $service->run();

        return to_route('companies.index')->with(
            'status',
            "Import #{$run->id}: {$run->companies_saved} companies saved",
        );
    }
}
