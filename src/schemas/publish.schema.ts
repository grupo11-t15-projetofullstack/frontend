import { z } from "zod"

export const publishSchema = z.object({
  id: z.number(),
  model: z.string(),
  make: z.string(),
  year: z.number(),
  color: z.string(),
  fuel: z.string(),
  distance: z.number(),
  price: z.number(),
  userId: z.string(),
  description: z.string(),
  coverImg: z.string(),
  images: z.string().array(),
  isGoodSell: z.boolean(),
  createdAt: z.date(),
})

export type PublishData = z.infer<typeof publishSchema>

export const publishSchemaRequest = publishSchema.omit({
  id: true,
  createdAt: true,
  isGoodSell: true,
  userId: true,
  images: true,
})

export type PublishRequest = z.infer<typeof publishSchemaRequest>
