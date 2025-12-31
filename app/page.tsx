import { ServerComponentDemo } from "@/components/server-component-demo";
import { Suspense } from "react";
import fs from "fs";
import Link from "next/link";
import { BIG_DATA } from "@/components/big-module";
//Turning JSX into an HTML string is usually known as "Server-Side Rendering" (SSR).
export default function Home() {
  const time = new Date().toISOString();
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            React Server Components Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            Understanding the difference between Server and Client Components
          </p>
          <p>Rendered at: {time}</p>
          <p>Big data length: {BIG_DATA.length}</p>
          <div className="flex justify-center gap-4">
            <Link
              href="/CSR"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              → Go to Client-Side Rendering Demo
            </Link>
          </div>
        </div>

        {/* Server Component Demo */}
        <Suspense
          fallback={
            <div className="rounded-lg border bg-card p-6">
              <div className="animate-pulse space-y-4">
                <div className="h-6 bg-muted rounded w-1/4" />
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            </div>
          }
        >
          <ServerComponentDemo />
        </Suspense>

        {/* Key Benefits Section */}
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-4">
            Server-Side Rendering Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">✓ Zero JavaScript Bundle</h3>
              <p className="text-sm text-muted-foreground">
                No client-side JavaScript needed, reducing bundle size and
                improving load times
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">✓ Direct Backend Access</h3>
              <p className="text-sm text-muted-foreground">
                Securely access databases, file systems, and APIs without
                exposing credentials
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">✓ Better Performance</h3>
              <p className="text-sm text-muted-foreground">
                Faster initial page load with pre-rendered HTML sent from the
                server
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">✓ SEO Optimized</h3>
              <p className="text-sm text-muted-foreground">
                Fully rendered content is available to search engines and social
                media crawlers
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-4">How SSR Works</h2>
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-semibold">1. Server Execution:</span> The
              server processes the request and executes React components
            </p>
            <p>
              <span className="font-semibold">2. HTML Generation:</span> React
              renders components to HTML strings on the server
            </p>
            <p>
              <span className="font-semibold">3. Initial Response:</span> Fully
              rendered HTML is sent to the client for immediate display
            </p>
            <p>
              <span className="font-semibold">4. Hydration:</span> JavaScript
              bundle loads and hydrates the HTML to make it interactive
            </p>
          </div>
        </div>

        {/* React Server Components Info */}
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-4">
            React Server Components (RSC)
          </h2>
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-semibold">• First introduced in 2020</span>{" "}
              - Officially released with React 19 (December 2024)
            </p>
            <p>
              <span className="font-semibold">• Server-side Rendering</span> -
              RSCs are rendered on the server allowing direct access to
              databases and file systems. However, they cannot handle
              client-side interactivity
            </p>
            <p>
              <span className="font-semibold">• Best for Static Content</span> -
              Suited for large and non-interactive content (e.g., items lists,
              data feeds)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
