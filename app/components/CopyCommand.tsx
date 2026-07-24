"use client";

import { useState } from "react";

export function CopyCommand({
  command,
  label = "コピー",
}: {
  command: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="copy-command" type="button" onClick={copy}>
      {copied ? "コピー済み ✓" : label}
    </button>
  );
}
