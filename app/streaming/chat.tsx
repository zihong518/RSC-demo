"use client";

import { useState, useTransition } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const [pending, startTransition] = useTransition();

  async function start() {
    setText("");

    const res = await fetch("/api/ai", {
      method: "POST",
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      startTransition(() => {
        setText((t) => t + decoder.decode(value));
      });
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button
          onClick={start}
          disabled={pending}
          className="cursor-pointer inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Streaming..." : "Start Streaming"}
        </button>
        <p className="text-sm text-muted-foreground">
          Click to fetch and stream the AI response from <code className="px-1 py-0.5 rounded bg-muted">/api/ai</code>.
        </p>
      </div>

      <div className="rounded-lg border bg-muted/40 p-4 font-mono text-sm text-foreground min-h-[200px] whitespace-pre-wrap">
        {text || "Response will stream here..."}
      </div>
    </div>
  );
}
