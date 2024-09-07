// types.ts

import * as z from "zod";

export const createPoolSchema = z.object({
    tokenA: z.string(),
    tokenB: z.string(),
});

export type CreatePoolFormValues = z.infer<typeof createPoolSchema>;
