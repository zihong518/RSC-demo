import { Suspense } from "react";
import Chat from "./chat";
import DelayedContent from "./delayed-content";
import LiveDashboard from "./sse";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            SSE / Fetch Streaming Demo
          </h1>
        </header>
        {/* Suspense Demo Section */}
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">React Suspense Demo</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-medium border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              Server Component
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            This section demonstrates React Suspense with a server component
            that takes 2 seconds to load.
          </p>
          <Suspense
            fallback={
              <div className="space-y-3">
                <div className="h-6 w-48 rounded bg-muted animate-pulse" />
                <div className="h-24 w-full rounded bg-muted/40 animate-pulse flex justify-center items-center" >
                Loading...
                </div>
                <div className="h-4 w-64 rounded bg-muted animate-pulse" />
              </div>
            }
          >
            <DelayedContent />
          </Suspense>
        </section>

        {/* Chat Streaming Section */}
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Fetch Streaming Demo</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 text-xs font-medium border border-purple-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Client Component
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            React 18 introduced streaming server-side rendering (SSR), an
            architectural improvement that allows you to render content in
            fragments and stream them to the client as they are ready,
            significantly enhancing performance and user experience
          </p>
          <Chat />

          {/* API Comparison */}
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {/* Traditional API */}
            <div className="rounded-lg border bg-muted/20 p-4 space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <span className="text-lg">⏳</span>
                Traditional API
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Client</span>
                  <span className="text-blue-500">──request──▶</span>
                  <span>Server</span>
                </div>
                <div className="flex items-center gap-2 text-amber-600">
                  <span>⏱️ Waiting 10 seconds...</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Client</span>
                  <span className="text-green-500">◀──whole text──</span>
                  <span>Server</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                User waits for entire response before seeing anything
              </p>
            </div>

            {/* Streaming API */}
            <div className="rounded-lg border bg-muted/20 p-4 space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <span className="text-lg">⚡</span>
                Streaming API
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Client</span>
                  <span className="text-blue-500">──request──▶</span>
                  <span>Server</span>
                </div>
                <div className="space-y-1 text-green-500">
                  <div className="flex items-center gap-2">
                    <span>Client</span>
                    <span>◀─</span>
                    <span className="text-foreground">&quot;Hel&quot;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Client</span>
                    <span>◀─</span>
                    <span className="text-foreground">&quot;lo&quot;</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Client</span>
                    <span>◀─</span>
                    <span className="text-foreground">&quot;!&quot;</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                User sees content progressively as it arrives
              </p>
            </div>
          </div>
        </section>

        {/* Live Dashboard Section */}
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Server-Sent Events Demo</h2>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 text-xs font-medium border border-purple-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Client Component
            </span>
          </div>
          <LiveDashboard />
        </section>

      </div>
    </main>
  );
}
