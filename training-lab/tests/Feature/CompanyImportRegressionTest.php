<?php

namespace Tests\Feature;

use App\Services\CompanyImportService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CompanyImportRegressionTest extends TestCase
{
    use RefreshDatabase;

    public function test_import_visits_every_page_and_deduplicates_by_website(): void
    {
        $this->markTestSkipped(
            'Day 18–20 regression exercise: remove this line after reproducing the pagination and duplicate defect.',
        );

        app(CompanyImportService::class)->run();

        $this->assertDatabaseCount('companies', 3);
        $this->assertDatabaseHas('companies', ['website' => 'https://globex.example']);
        $this->assertDatabaseHas('crawl_runs', [
            'pages_visited' => 2,
            'companies_seen' => 4,
            'companies_saved' => 3,
        ]);
    }
}
