<?php

namespace App\Services;

use App\Models\Company;
use App\Models\CrawlRun;

final class CompanyImportService
{
    public function __construct(
        private readonly DemoCompanySource $source,
    ) {}

    public function run(): CrawlRun
    {
        $run = CrawlRun::query()->create([
            'status' => 'running',
            'started_at' => now(),
        ]);

        $records = $this->source->fetchPage(1);

        foreach ($records as $record) {
            Company::query()->create([
                ...$record,
                'source_page' => 1,
            ]);
        }

        $run->update([
            'status' => 'completed',
            'pages_visited' => 1,
            'companies_seen' => count($records),
            'companies_saved' => count($records),
            'finished_at' => now(),
            'notes' => 'Demo source import completed.',
        ]);

        return $run->fresh();
    }
}
