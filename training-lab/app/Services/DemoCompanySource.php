<?php

namespace App\Services;

final class DemoCompanySource
{
    /**
     * @return list<array{name: string, website: string}>
     */
    public function fetchPage(int $page): array
    {
        return match ($page) {
            1 => [
                ['name' => 'Acme Robotics', 'website' => 'https://acme.example'],
                ['name' => 'Northwind Labs', 'website' => 'https://northwind.example'],
            ],
            2 => [
                ['name' => 'Acme Robotics Inc.', 'website' => 'https://acme.example'],
                ['name' => 'Globex Analytics', 'website' => 'https://globex.example'],
            ],
            default => [],
        };
    }
}
