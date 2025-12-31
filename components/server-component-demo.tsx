import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InteractiveCounter } from "@/components/interactive-counter"
import { ServerIcon, MonitorIcon, DatabaseIcon, ZapIcon } from "lucide-react"
import { FetchUserData } from "@/components/fetch-user-data"
import Database from "better-sqlite3"

const db = new Database("dev.db")
// This is a SERVER COMPONENT (default in Next.js App Router)
// - Runs on the server only
// - Can directly access backend resources (databases, file system, etc.)
// - Can be async to fetch data
// - Cannot use hooks like useState, useEffect, or browser APIs
// - Cannot handle user interactions directly

export async function ServerComponentDemo() {
  // Simulating a database fetch - this runs on the SERVER only
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const users = db.prepare("SELECT * FROM users").all()

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Server Component Card */}
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <ServerIcon className="h-5 w-5 text-primary" />
            <CardTitle>Server Component</CardTitle>
          </div>
          <CardDescription>Runs on the server, no JavaScript sent to client</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4 space-y-2">
            <p className="text-sm font-medium flex items-center gap-2">
              <DatabaseIcon className="h-4 w-4" />
              Server-side data:
            </p>
            <ul>
              {users.map((u: any) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">✅ Can do:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Access databases directly</li>
              <li>• Read files from the file system</li>
              <li>• Use environment variables securely</li>
              <li>• Be async/await</li>
              <li>• Keep large dependencies on server</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">❌ Cannot do:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use useState, useEffect, or other hooks</li>
              <li>• Handle user interactions (onClick, etc.)</li>
              <li>• Access browser APIs (localStorage, window)</li>
            </ul>
          </div>

          <Badge variant="secondary" className="w-full justify-center">
            No JavaScript shipped for this component
          </Badge>
        </CardContent>
      </Card>

      {/* Client Component Card */}
      <Card className="border-2 border-chart-1/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <MonitorIcon className="h-5 w-5 text-chart-1" />
            <CardTitle>Client Component</CardTitle>
          </div>
          <CardDescription>Runs in the browser, interactive and stateful</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* This is where we use a CLIENT component */}
          <InteractiveCounter />
          <FetchUserData />
          <div className="space-y-2">
            <p className="text-sm font-semibold">✅ Can do:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Use hooks (useState, useEffect, etc.)</li>
              <li>• Handle user interactions</li>
              <li>• Access browser APIs</li>
              <li>• Use event listeners</li>
              <li>• Maintain client-side state</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">❌ Cannot do:</p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Access backend resources directly</li>
              <li>• Use Node.js APIs</li>
              <li>• Access environment variables (except NEXT_PUBLIC_*)</li>
            </ul>
          </div>

          <Badge variant="secondary" className="w-full justify-center bg-chart-1/10 text-chart-1">
            <ZapIcon className="h-3 w-3 mr-1" />
            JavaScript shipped for interactivity
          </Badge>
        </CardContent>
      </Card>

      {/* Comparison Card */}
      <Card className="lg:col-span-2 border-2">
        <CardHeader>
          <CardTitle>Key Differences Summary</CardTitle>
          <CardDescription>When to use Server vs Client Components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="font-semibold text-sm">Use Server Components for:</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Fetching data from databases</li>
                <li>• Accessing backend resources</li>
                <li>• Keeping sensitive logic on server</li>
                <li>• Reducing client-side JavaScript</li>
                <li>• Static content rendering</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-sm">Use Client Components for:</p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Interactive UI elements (buttons, forms)</li>
                <li>• State management with hooks</li>
                <li>• Browser APIs (localStorage, geolocation)</li>
                <li>• Event listeners (onClick, onChange)</li>
                <li>• Real-time updates and animations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
