// app/users/page.tsx (Server Component)
import EditUserButton from "./component/EditUserButton"
import Database from "better-sqlite3"   

const db = new Database("dev.db")
interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    createdAt: string;
}

export default async function UsersTable() {
    const users = db.prepare("SELECT * FROM users").all() as User[]

    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Users</h1>

            <div className="overflow-hidden rounded-lg border bg-white">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100 text-gray-600 sticky top-0 z-10">
                        <tr>
                            <th className="px-4 py-3 text-left font-medium">Name</th>
                            <th className="px-4 py-3 text-left font-medium">Email</th>
                            <th className="px-4 py-3 text-left font-medium">Role</th>
                            <th className="px-4 py-3 text-left font-medium">Status</th>
                            <th className="px-4 py-3 text-left font-medium">Created</th>
                            <th className="px-4 py-3 text-left font-medium">Edit</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {users.map(user => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3 font-medium text-gray-900">
                                    {user.name}
                                </td>

                                <td className="px-4 py-3 text-gray-600">
                                    {user.email ?? "—"}
                                </td>

                                <td className="px-4 py-3">
                                    {user.role}
                                </td>

                                <td className="px-4 py-3">
                                    {user.status}
                                </td>

                                <td className="px-4 py-3 text-gray-500">
                                    {new Date(user.createdAt).toLocaleString()}
                                </td>
                                <td>    
                                    <EditUserButton user={user} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    
    )
}