import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const ADMIN_KEY = "9bb82a59166459a6e7dfc45b3e340633";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const key = req.headers["x-admin-key"] || req.query.key;
  if (key !== ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const sql = neon(process.env.POSTGRES_URL!);

  if (req.method === "GET") {
    try {
      const rows = await sql`
        SELECT * FROM waitlist_entries ORDER BY created_at DESC
      `;
      return res.status(200).json({ count: rows.length, entries: rows });
    } catch (err) {
      console.error("Waitlist list error:", err);
      return res.status(500).json({ error: "Failed to fetch entries" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      if (id) {
        await sql`DELETE FROM waitlist_entries WHERE id = ${Number(id)}`;
        return res.status(200).json({ success: true, deleted: Number(id) });
      }
      await sql`DELETE FROM waitlist_entries`;
      return res.status(200).json({ success: true, message: "All entries deleted" });
    } catch (err) {
      console.error("Waitlist delete error:", err);
      return res.status(500).json({ error: "Failed to delete entries" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
