import Database from "better-sqlite3"
import path from "path"

const db = new Database(
  path.join(process.cwd(), "dev.db")
)

export async function GET() {
  return Response.json(
    db.prepare("SELECT * FROM users").all()
  )
}