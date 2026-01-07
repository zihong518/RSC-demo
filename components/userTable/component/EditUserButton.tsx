"use client"

import { useState } from "react"
import { X } from "lucide-react"
import {updateUser} from "./action"
export default function EditUserButton({ user }: { user: { id: number; name: string; email: string } }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const handleSave = () => {
        console.log("Saving:", { name, email })
        const updatedData = {
            "id": user.id,
            "name": name,
            "email": email
        }
        updateUser(updatedData)
        setOpen(false)
    }

    return (
        <>
            <button 
                onClick={() => setOpen(true)}
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
            >
                Edit
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96 space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold">Edit User</h3>
                            <button 
                                onClick={() => setOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="flex gap-2 justify-end">
                            <button 
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}