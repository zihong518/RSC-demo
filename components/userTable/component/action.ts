'use server'
import Database from "better-sqlite3"
import { revalidatePath } from "next/cache"

const db = new Database("dev.db")
    

export async function updateUser(updatedData: { id: number; name: string; email: string }) {
    const id = updatedData.id
    const name = updatedData.name
    const email = updatedData.email

  db.prepare(`
    UPDATE users
    SET
      name = ?,
      email = ?
    WHERE id = ?
  `).run(name, email, id)

  revalidatePath("/users")
}