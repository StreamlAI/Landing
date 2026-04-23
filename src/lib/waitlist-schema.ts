import { z } from "zod";

export const platformOptions = [
  "Instagram",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Other",
] as const;

export const budgetOptions = ["<$1k", "$1k-$5k", "$5k-$25k", "$25k+"] as const;
export const followerOptions = ["<1k", "1k-10k", "10k-100k", "100k+"] as const;

const platformEnum = z.enum(platformOptions);

const baseFields = {
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Please enter a valid email").max(255),
  platforms: z.array(platformEnum).min(1, "Select at least one platform"),
  referred: z.boolean(),
  referred_by: z.string().max(255).optional(),
};

export const brandSchema = z.object({
  user_type: z.literal("brand"),
  company_name: z.string().min(1, "Company name is required").max(255),
  monthly_budget: z.enum(budgetOptions).optional(),
  ...baseFields,
});

export const influencerSchema = z.object({
  user_type: z.literal("influencer"),
  social_handle: z.string().min(1, "Social handle is required").max(255),
  follower_count: z.enum(followerOptions).optional(),
  ...baseFields,
});

export const waitlistSchema = z
  .discriminatedUnion("user_type", [brandSchema, influencerSchema])
  .refine(
    (data) =>
      !data.referred ||
      (data.referred_by && data.referred_by.trim().length > 0),
    {
      message: "Please tell us who referred you",
      path: ["referred_by"],
    },
  );

export type BrandFormData = z.infer<typeof brandSchema>;
export type InfluencerFormData = z.infer<typeof influencerSchema>;
export type WaitlistFormData = z.infer<typeof waitlistSchema>;
