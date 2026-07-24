"use client";

import { useMemo, useState } from "react";
import { glossaryCategories, type GlossaryTerm } from "../data/glossary";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof glossaryCategories)[number]>("すべて");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return terms.filter((item) => {
      const categoryMatch = category === "すべて" || item.category === category;
      const text = `${item.term} ${item.japanese} ${item.meaning} ${item.example}`.toLowerCase();
      return categoryMatch && (!normalized || text.includes(normalized));
    });
  }, [category, query, terms]);

  return (
    <div className="glossary-tool">
      <div className="glossary-controls">
        <label>
          <span>言葉を検索</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="例: Branch、ポート、AI"
            type="search"
          />
        </label>
        <div className="glossary-filters" aria-label="用語カテゴリ">
          {glossaryCategories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="glossary-result-count">{filtered.length}語を表示中</p>
      {filtered.length ? (
        <div className="glossary-grid">
          {filtered.map((item) => (
            <article key={item.term}>
              <span>{item.category}</span>
              <h2>{item.term}</h2>
              <strong>{item.japanese}</strong>
              <p>{item.meaning}</p>
              <div><small>たとえば</small>{item.example}</div>
            </article>
          ))}
        </div>
      ) : (
        <div className="glossary-empty">
          見つかりませんでした。英語・日本語の一部、または別のカテゴリで試してください。
        </div>
      )}
    </div>
  );
}
