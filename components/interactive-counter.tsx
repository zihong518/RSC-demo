"use client"

// This is a CLIENT COMPONENT (marked with 'use client')
// - Runs in the browser
// - Can use React hooks and state
// - Can handle user interactions
// - JavaScript is sent to the client

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LaptopMinimal, MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react"

export function InteractiveCounter() {
  const [count, setCount] = useState(0)
  
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="rounded-lg bg-chart-1/5 p-4 space-y-4">

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Interactive Counter Example:</p>
        {mounted && <span className="text-xs text-muted-foreground">Client-side rendered</span>}
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button size="icon" variant="outline" onClick={() => setCount(count - 1)} aria-label="Decrease count">
          <MinusIcon className="h-4 w-4" />
        </Button>

        <div className="min-w-[80px] text-center">
          <p className="text-4xl font-bold tabular-nums">{count}</p>
        </div>

        <Button size="icon" variant="outline" onClick={() => setCount(count + 1)} aria-label="Increase count">
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>

      <Button variant="secondary" size="sm" onClick={() => setCount(0)} className="w-full">
        <RotateCcwIcon className="h-3 w-3 mr-2" />
        Reset
      </Button>

      <div className="text-xs text-muted-foreground space-y-1">
        <p>💡 This component uses:</p>
        <ul className="ml-4 space-y-0.5">
          <li>• useState hook for counter state</li>
          <li>• onClick handlers for interactivity</li>
          <li>• useEffect for client-side mounting</li>
        </ul>
      </div>
    </div>
  )
}
