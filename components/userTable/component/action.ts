'use server'
import Database from "better-sqlite3"
import { revalidatePath } from "next/cache"

const db = new Database("dev.db")
    

export async function updateUser(formData: FormData) {
    const id = formData.get("id")
    const name = formData.get("name")
    const email = formData.get("email")
    await new Promise(resolve => setTimeout(resolve, 2000));
      db.prepare(`
    UPDATE users
    SET
      name = ?,
      email = ?
    WHERE id = ?
  `).run(name, email, id)
  

  revalidatePath("/users")
}