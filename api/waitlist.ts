import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import { z } from "zod";

const platformEnum = z.enum([
  "Instagram",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Other",
]);

const baseFields = {
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  platforms: z.array(platformEnum).min(1),
  referred: z.boolean(),
  referred_by: z.string().max(255).optional(),
};

const brandSchema = z.object({
  user_type: z.literal("brand"),
  company_name: z.string().min(1).max(255),
  monthly_budget: z
    .enum(["<$1k", "$1k-$5k", "$5k-$25k", "$25k+"])
    .optional(),
  ...baseFields,
});

const influencerSchema = z.object({
  user_type: z.literal("influencer"),
  social_handle: z.string().min(1).max(255),
  follower_count: z
    .enum(["<1k", "1k-10k", "10k-100k", "100k+"])
    .optional(),
  ...baseFields,
});

const waitlistSchema = z
  .discriminatedUnion("user_type", [brandSchema, influencerSchema])
  .refine((data) => !data.referred || (data.referred_by && data.referred_by.trim().length > 0), {
    message: "Please tell us who referred you",
    path: ["referred_by"],
  });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = waitlistSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: parsed.error.flatten(),
    });
  }

  const data = parsed.data;
  const sql = neon(process.env.POSTGRES_URL!);

  try {
    await sql`
      INSERT INTO waitlist_entries (
        user_type, name, email, company_name, social_handle,
        platforms, monthly_budget, follower_count, referred, referred_by
      ) VALUES (
        ${data.user_type},
        ${data.name},
        ${data.email},
        ${"company_name" in data ? data.company_name : null},
        ${"social_handle" in data ? data.social_handle : null},
        ${data.platforms},
        ${"monthly_budget" in data ? (data.monthly_budget ?? null) : null},
        ${"follower_count" in data ? (data.follower_count ?? null) : null},
        ${data.referred},
        ${data.referred_by ?? null}
      )
    `;

    return res.status(200).json({ success: true, message: "You're on the list!" });
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      err.message.includes("unique")
    ) {
      return res.status(409).json({
        error: "You're already on the waitlist!",
      });
    }
    console.error("Waitlist insert error:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
