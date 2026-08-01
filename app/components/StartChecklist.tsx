"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tutorial-course-start-checklist";
const kickoffPrompt = `COACHモードで進めてください。
まずAGENTS.md、START-HERE.md、course/tasks/day-01.mdを読んでください。
まだ実装ファイルは変更しないでください。
現在のBranchとgit statusを確認し、今日のGoal、Context、Constraints、Done whenを整理してください。
その後、learning-log/day-01/plan.mdに実行Taskをチェックリストで作成し、最初の1項目だけ説明して待ってください。`;

const checks = [
  "公開教材サイトを開いた（Login不要）",
  "GitHubへログインし、自分のRepositoryを作った",
  "Codespaceの初回Setupが完了した",
  "Port 3000で教材サイトを開いた",
  "Port 8000でLaravel Labを開いた",
  "Day 01のTaskとBranchを作った",
];

export function StartChecklist() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) setCompleted(JSON.parse(saved) as number[]);
      } catch {
        // The checklist remains usable during this visit.
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggle(index: number) {
    const next = completed.includes(index)
      ? completed.filter((item) => item !== index)
      : [...completed, index];
    setCompleted(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Progress persistence is optional.
    }
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(kickoffPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="start-interactive">
      <section className="start-checklist" aria-labelledby="ready-title">
        <div className="start-checklist-heading">
          <div>
            <span className="lesson-section-kicker">READY CHECK</span>
            <h2 id="ready-title">ここまでできたらDay 01へ</h2>
          </div>
          <strong>{completed.length} / {checks.length}</strong>
        </div>
        <div className="start-progress" aria-hidden="true">
          <span style={{ width: `${(completed.length / checks.length) * 100}%` }} />
        </div>
        <ul>
          {checks.map((check, index) => (
            <li key={check}>
              <label>
                <input
                  type="checkbox"
                  checked={completed.includes(index)}
                  onChange={() => toggle(index)}
                />
                <span>{check}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className="start-prompt" aria-labelledby="kickoff-title">
        <div>
          <span className="lesson-section-kicker">CODEX KICKOFF</span>
          <h2 id="kickoff-title">最初の指示をそのまま使う</h2>
          <p>最初は実装を任せず、Taskと現在地を理解させます。</p>
        </div>
        <pre><code>{kickoffPrompt}</code></pre>
        <button type="button" onClick={copyPrompt}>
          {copied ? "コピーしました ✓" : "Codex用Promptをコピー"}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "プロンプトをコピーしました" : ""}
        </span>
      </section>
    </div>
  );
}
