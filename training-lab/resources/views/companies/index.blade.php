<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Company Import Lab</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <main class="lab-shell">
        <header class="lab-header">
            <div>
                <p class="lab-kicker">TUTORIAL COURSE · TRAINING LAB</p>
                <h1>Company Import Monitor</h1>
                <p>Laravel、Database、Scraping、Testingを一つの処理経路で調査する練習アプリです。</p>
            </div>
            <form method="post" action="{{ route('imports.demo') }}">
                @csrf
                <button type="submit">Run demo import</button>
            </form>
        </header>

        @if (session('status'))
            <p class="lab-notice">{{ session('status') }}</p>
        @endif

        <section class="lab-stats" aria-label="Import status">
            <article>
                <span>COMPANIES</span>
                <strong>{{ $companies->total() }}</strong>
            </article>
            <article>
                <span>LAST RUN</span>
                <strong>{{ $latestRun ? "#{$latestRun->id}" : '—' }}</strong>
            </article>
            <article>
                <span>PAGES VISITED</span>
                <strong>{{ $latestRun?->pages_visited ?? '—' }}</strong>
            </article>
            <article>
                <span>STATUS</span>
                <strong>{{ $latestRun?->status ?? 'ready' }}</strong>
            </article>
        </section>

        <section class="lab-panel">
            <div class="lab-panel-heading">
                <div>
                    <p class="lab-kicker">DATABASE RECORDS</p>
                    <h2>Imported companies</h2>
                </div>
                <code>GET /companies</code>
            </div>

            <div class="lab-table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Website</th>
                            <th>Source page</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($companies as $company)
                            <tr>
                                <td>{{ $company->name }}</td>
                                <td>{{ $company->website }}</td>
                                <td>{{ $company->source_page }}</td>
                                <td><span class="lab-status">{{ $company->status }}</span></td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4">No companies yet. Run the demo import.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            {{ $companies->links() }}
        </section>

        <aside class="lab-hint">
            <strong>Investigation target</strong>
            <p>Route → Controller → Service → Model → SQLite → Feature Testの順に、根拠ファイルを開いて処理を追ってください。</p>
        </aside>
    </main>
</body>
</html>
