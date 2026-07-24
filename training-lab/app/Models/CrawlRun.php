<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CrawlRun extends Model
{
    protected $fillable = [
        'status',
        'pages_visited',
        'companies_seen',
        'companies_saved',
        'started_at',
        'finished_at',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
            'finished_at' => 'datetime',
        ];
    }
}
