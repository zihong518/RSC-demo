'use client'

import { useState, useEffect } from "react"
import { LaptopMinimal } from "lucide-react"

export function FetchUserData() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // Fetch users from the API route when the component mounts
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
    }, [])

    return (
        <div className="rounded-lg bg-muted p-4 space-y-2">
            <p className="text-sm font-medium flex items-center gap-2">
                <LaptopMinimal className="h-4 w-4" />
                Browser APIs - Fetched user data:
            </p>
            <ul>
                {users.map((u: any) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    )
}
