import { z } from "zod";

export const CardSchema = z.object({
  id: z.number(),
  name: z.string(),
  category: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
})

export type Card = z.infer<typeof CardSchema>;

export const CardsListSchema = z.array(CardSchema);
export type CardsList = z.infer<typeof CardsListSchema>;