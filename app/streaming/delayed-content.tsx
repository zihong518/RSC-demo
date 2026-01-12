
async function fetchDelayedData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    message: "This content was loaded after a 2-second delay!",
    timestamp: new Date().toLocaleTimeString(),
  };
}

export default async function DelayedContent() {
  const data = await fetchDelayedData();

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Suspense Demo Content</h3>
      <div className="rounded-lg border bg-muted/40 p-4 space-y-2">
        <p className="text-sm">
          <span className="font-semibold">Message:</span> {data.message}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">Loaded at:</span> {data.timestamp}
        </p>
      </div>
      <p className="text-xs text-muted-foreground">
        ⚡ This is a server component that takes 2 seconds to load, demonstrating React Suspense boundaries.
      </p>

      <div className="mt-4 rounded-lg border bg-muted/20 p-4 space-y-3">
        <h4 className="text-sm font-semibold">Using Suspense</h4>
        <p className="text-sm text-muted-foreground">
          Wrap async server components with a <code className="px-1 py-0.5 rounded bg-muted">&lt;Suspense/&gt;</code> boundary to show a fallback while they load.
        </p>
        <pre className="rounded bg-muted/40 p-3 text-xs font-mono text-muted-foreground overflow-x-auto">
{`import { Suspense } from "react";

<Suspense fallback={<div>Loading content…</div>}>
  <DelayedContent />
</Suspense>`}
        </pre>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Show the <em>fallback</em> immediately while the server work runs.</li>
          <li>Replace the fallback with real content when the async work resolves.</li>
          <li>Place boundaries around slow sections; you can nest multiple boundaries.</li>
          <li>Use lightweight skeletons to avoid layout shift.</li>
        </ul>
      </div>
    </div>
  );
}
