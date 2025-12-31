'use client'

import { InteractiveCounter } from "@/components/interactive-counter"
import Link from "next/link"
import { BIG_DATA } from "@/components/big-module"

export default function ClientRenderingDemo() {
    const time = new Date().toISOString()
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-muted p-8">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Client-Side Rendering Demo
            </h1>
            <p className="text-lg text-muted-foreground">
              Interactive components that run in the browser with React hooks
              and state
            </p>
            <p>Rendered at: {time}</p>
            <p>Big data length: {BIG_DATA.length}</p>
          </div>
          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
            >
              ← Back to Server Components
            </Link>
          </div>

          {/* Interactive Counter Demo */}
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Interactive Components
              </h2>
              <p className="text-sm text-muted-foreground">
                These components are marked with &apos;use client&apos; and run
                entirely in the browser. They can use React hooks, handle user
                interactions, and maintain state.
              </p>
            </div>
            <InteractiveCounter />
          </div>

          {/* Key Benefits Section */}
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              Client-Side Rendering Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">✓ Interactivity</h3>
                <p className="text-sm text-muted-foreground">
                  Full access to React hooks like useState, useEffect,
                  useContext, etc.
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">✓ User Interactions</h3>
                <p className="text-sm text-muted-foreground">
                  Handles clicks, form submissions, and other browser events
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">✓ Real-time Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Update UI instantly without server round-trips
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">✓ Browser APIs</h3>
                <p className="text-sm text-muted-foreground">
                  Access localStorage, sessionStorage, geolocation, and other
                  browser APIs
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="rounded-lg border bg-card p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-4">
              How CSR Works
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                <span className="font-semibold">1. Initial Load:</span> Server
                sends minimal HTML with JavaScript bundle references
              </p>
              <p>
                <span className="font-semibold">2. JavaScript Download:</span> Browser
                downloads and executes the React application bundle
              </p>
              <p>
                <span className="font-semibold">3. Client Rendering:</span> React
                renders the entire application in the browser DOM
              </p>
              <p>
                <span className="font-semibold">4. Interactivity:</span> Application
                becomes fully interactive with state management and event handlers
              </p>
            </div>
          </div>
        </div>
      </main>
    );
}
