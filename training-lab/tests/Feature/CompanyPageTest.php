<?php

namespace Tests\Feature;

use App\Models\Company;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CompanyPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_company_page_lists_saved_companies(): void
    {
        Company::factory()->create(['name' => 'Sakura Systems']);

        $this->get('/companies')
            ->assertOk()
            ->assertSee('Sakura Systems')
            ->assertSee('Run demo import');
    }

    public function test_demo_import_can_be_started_from_the_page(): void
    {
        $this->post('/imports/demo')
            ->assertRedirectToRoute('companies.index');

        $this->assertDatabaseCount('companies', 2);
        $this->assertDatabaseHas('crawl_runs', [
            'status' => 'completed',
            'pages_visited' => 1,
        ]);
    }
}
