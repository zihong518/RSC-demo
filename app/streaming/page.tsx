import { Suspense } from "react";
import Chat from "./chat";
import DelayedContent from "./delayed-content";
import LiveDashboard from "./sse";
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">AI Fetch Streaming Demo</h1>
          <p className="text-muted-foreground">
            Streams AI responses from the API using the Fetch streaming reader.
          </p>
        </header>
        <LiveDashboard />
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <Chat />
        </section>

        {/* Suspense Demo Section */}
        <section className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">React Suspense Demo</h2>
          <p className="text-sm text-muted-foreground mb-4">
            This section demonstrates React Suspense with a server component that takes 2 seconds to load.
          </p>
          <Suspense
            fallback={
              <div className="space-y-3 flex items-center justify-center">
                <div className="h-24 w-full rounded bg-muted/40 animate-pulse text-center flex items-center justify-center" >
                loading...
                </div>
              </div>
            }
          >
            <DelayedContent />
          </Suspense>
        </section>

      </div>
    </main>
  );
}
