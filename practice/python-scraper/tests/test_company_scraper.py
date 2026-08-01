import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parents[1]))

from src.company_scraper import deduplicate, load_fixture, parse_companies


class CompanyScraperTest(unittest.TestCase):
    def test_parses_company_name_website_and_source_page(self) -> None:
        companies = parse_companies(load_fixture(1), page=1)

        self.assertEqual(2, len(companies))
        self.assertEqual("Acme Robotics", companies[0].name)
        self.assertEqual("https://acme.example", companies[0].website)
        self.assertEqual(1, companies[0].source_page)

    def test_deduplicates_across_pages_using_website(self) -> None:
        companies = [
            *parse_companies(load_fixture(1), page=1),
            *parse_companies(load_fixture(2), page=2),
        ]

        unique = deduplicate(companies)

        self.assertEqual(3, len(unique))
        self.assertEqual(
            {
                "https://acme.example",
                "https://northwind.example",
                "https://globex.example",
            },
            {company.website for company in unique},
        )


if __name__ == "__main__":
    unittest.main()
