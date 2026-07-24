# Python Scraper Practice

Day 11–12で、HTML解析、Pagination、重複排除、Timeout、Retry、Playwrightへ進むための小さなPracticeです。

最初のBaselineはPython標準Libraryだけで動きます。

```bash
cd practice/python-scraper
python3 -m unittest discover -s tests -v
python3 -m src.company_scraper
```

Day 11では`requirements.txt`を使ってRequestsとBeautiful Soup版を作り、標準Library版との違いを記録します。

```bash
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
```

Day 12では利用規約とrobots.txtを確認できる練習対象だけを使い、PlaywrightのBrowserを別途Installします。

```bash
python3 -m playwright install chromium
```
