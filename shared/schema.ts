import { z } from "zod";

// Statistics
export const statsSchema = z.object({
  totalServers: z.string(),
  totalUsers: z.string(),
  uptime: z.string(),
  threatsblocked: z.string(),
});

export type Stats = z.infer<typeof statsSchema>;

// Feature
export const featureSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  benefit: z.string().optional(),
});

export type Feature = z.infer<typeof featureSchema>;

// Command
export const commandSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  usage: z.string(),
  examples: z.array(z.string()),
});

export type Command = z.infer<typeof commandSchema>;

// Pricing Tier
export const pricingTierSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  period: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  popular: z.boolean().optional(),
  ctaText: z.string(),
  ctaLink: z.string(),
});

export type PricingTier = z.infer<typeof pricingTierSchema>;

// Testimonial
export const testimonialSchema = z.object({
  id: z.string(),
  serverName: z.string(),
  serverIcon: z.string().optional(),
  authorName: z.string(),
  authorRole: z.string(),
  content: z.string(),
  rating: z.number().min(1).max(5),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
