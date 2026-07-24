from __future__ import annotations

from dataclasses import asdict, dataclass
from html.parser import HTMLParser
from pathlib import Path


@dataclass(frozen=True)
class Company:
    name: str
    website: str
    source_page: int


class CompanyHTMLParser(HTMLParser):
    def __init__(self, page: int) -> None:
        super().__init__()
        self.page = page
        self.companies: list[Company] = []
        self._current_name: str | None = None
        self._current_website: str | None = None
        self._inside_name = False

    def handle_starttag(
        self,
        tag: str,
        attrs: list[tuple[str, str | None]],
    ) -> None:
        attributes = dict(attrs)
        if tag == "article" and attributes.get("data-company"):
            self._current_name = ""
            self._current_website = None
        if self._current_name is not None and tag == "h2":
            self._inside_name = True
        if self._current_name is not None and tag == "a":
            self._current_website = attributes.get("href")

    def handle_data(self, data: str) -> None:
        if self._inside_name and self._current_name is not None:
            self._current_name += data

    def handle_endtag(self, tag: str) -> None:
        if tag == "h2":
            self._inside_name = False
        if tag == "article" and self._current_name is not None:
            if self._current_website:
                self.companies.append(
                    Company(
                        name=self._current_name.strip(),
                        website=self._current_website,
                        source_page=self.page,
                    )
                )
            self._current_name = None
            self._current_website = None


def parse_companies(html: str, page: int) -> list[Company]:
    parser = CompanyHTMLParser(page)
    parser.feed(html)
    return parser.companies


def deduplicate(companies: list[Company]) -> list[Company]:
    by_website: dict[str, Company] = {}
    for company in companies:
        by_website.setdefault(company.website, company)
    return list(by_website.values())


def load_fixture(page: int) -> str:
    path = Path(__file__).parents[1] / "fixtures" / f"page-{page}.html"
    return path.read_text(encoding="utf-8")


def run_fixture_import() -> list[Company]:
    companies = [
        *parse_companies(load_fixture(1), page=1),
        *parse_companies(load_fixture(2), page=2),
    ]
    return deduplicate(companies)


if __name__ == "__main__":
    for company in run_fixture_import():
        print(asdict(company))
