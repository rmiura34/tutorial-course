"use client";

import { useEffect, useMemo, useState } from "react";
import { CopyCommand } from "./CopyCommand";

export type ExecutionStep = {
  title: string;
  detail: string;
  code?: string;
  location?: string;
  why?: string;
  success?: string;
  action?: "terminal" | "vscode" | "github";
};

type LessonStepChecklistProps = {
  branch: string;
  lessonSlug: string;
  steps: ExecutionStep[];
};

const STORAGE_PREFIX = "tutorial-course-step-progress";

function inferAction(step: ExecutionStep): ExecutionStep["action"] {
  if (step.action) return step.action;
  const text = `${step.title} ${step.detail}`;
  if (/GitHub|Pull Request|\bPR\b|Issue|Push|Merge/i.test(text)) return "github";
  if (step.code || /Terminal|Command|コマンド|実行/i.test(text)) return "terminal";
  if (/VS Code|Explorer|File|ファイル|編集|開く/i.test(text)) return "vscode";
  return undefined;
}

function actionLabel(action: ExecutionStep["action"]) {
  if (action === "github") return "GitHub";
  if (action === "vscode") return "VS Code";
  if (action === "terminal") return "Terminal";
  return "VS Code / GitHub";
}

function fallbackLocation(action: ExecutionStep["action"], branch: string) {
  if (action === "github") return `GitHubで自分のRepositoryを開き、${branch} Branchを選ぶ`;
  if (action === "terminal") return "VS Code下部のTerminal（Repositoryの一番上のFolder）";
  if (action === "vscode") return `VS Codeで ${branch} Branchの対象Fileを開く`;
  return `course/tasksの今日のTaskを確認し、${branch} Branch内の指定された場所を開く`;
}

function fallbackSuccess(action: ExecutionStep["action"]) {
  if (action === "github") return "GitHub画面に説明どおりのBranch・Issue・Pull Requestの状態が表示されれば、このStepは完了です。";
  if (action === "terminal") return "Terminalで説明どおりの出力またはErrorを確認し、その結果を記録できれば、このStepは完了です。";
  if (action === "vscode") return "対象Fileまたは設定を開き、説明にある確認・編集結果を自分の目で照合できれば、このStepは完了です。";
  return "Taskの説明と実際の画面・Fileを照合し、行ったことを自分の言葉で記録できれば完了です。";
}

export function LessonStepChecklist({
  branch,
  lessonSlug,
  steps,
}: LessonStepChecklistProps) {
  const storageKey = `${STORAGE_PREFIX}:${lessonSlug}`;
  const [completed, setCompleted] = useState<number[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) setCompleted(JSON.parse(saved) as number[]);
      } catch {
        // The checklist still works for this visit when browser storage is unavailable.
      }
      setReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [storageKey]);

  const completedSet = useMemo(() => new Set(completed), [completed]);

  function toggle(index: number) {
    const next = completedSet.has(index)
      ? completed.filter((item) => item !== index)
      : [...completed, index];
    setCompleted(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // Keep the in-memory state when storage is unavailable.
    }
  }

  return (
    <section className="step-section" aria-labelledby="hands-on-heading">
      <div className="execution-heading">
        <div>
          <span className="lesson-section-kicker">HANDS ON · 上から順に実行</span>
          <h2 id="hands-on-heading">実際のProjectで手を動かす</h2>
          <p>各Stepが終わったら左のチェックを付けます。閉じても、この端末には進捗が残ります。</p>
        </div>
        <div className="step-progress" aria-live="polite">
          <strong>{ready ? completed.length : 0} / {steps.length}</strong>
          <span>Step完了</span>
        </div>
      </div>

      <ol className="execution-step-list">
        {steps.map((step, index) => {
          const done = completedSet.has(index);
          const action = inferAction(step);
          const location = step.location ?? fallbackLocation(action, branch);
          const why = step.why ?? `次の作業へ進む前に「${step.title}」を自分で確認できるようにするためです。`;
          const success = step.success ?? fallbackSuccess(action);

          return (
            <li className={done ? "is-complete" : ""} key={`${step.title}-${index}`}>
              <label className="step-check-control">
                <input
                  checked={done}
                  onChange={() => toggle(index)}
                  type="checkbox"
                />
                <span aria-hidden="true">{done ? "✓" : String(index + 1).padStart(2, "0")}</span>
                <span className="sr-only">Step {index + 1}「{step.title}」を完了にする</span>
              </label>

              <article>
                <div className="step-title-row">
                  <span className="action-badge">{actionLabel(action)}</span>
                  <h3>{step.title}</h3>
                </div>

                <dl className="step-instructions">
                  <div>
                    <dt>📍 作業する場所</dt>
                    <dd>{location}</dd>
                  </div>
                  <div>
                    <dt>▶ やること</dt>
                    <dd>{step.detail}</dd>
                  </div>
                  <div>
                    <dt>💡 なぜやるか</dt>
                    <dd>{why}</dd>
                  </div>
                </dl>

                {step.code ? (
                  <div className="step-command-block">
                    <div>
                      <strong>Terminalに入力</strong>
                      <span>$ は入力せず、下の文字だけを貼り付けます</span>
                    </div>
                    <pre><code>{step.code}</code></pre>
                    <CopyCommand command={step.code} label="Commandをコピー" />
                  </div>
                ) : (
                  <p className="no-command-note">
                    <strong>Terminal入力なし</strong>
                    このStepは画面またはFile上で確認・編集します。
                  </p>
                )}

                <div className="step-success">
                  <strong>✓ 成功時の見え方</strong>
                  <p>{success}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
