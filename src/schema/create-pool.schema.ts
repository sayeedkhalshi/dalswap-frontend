// types.ts

import * as z from "zod";

export const createPoolSchema = z.object({
    tokenA: z.string(),
    tokenB: z.string(),
    amountA: z.string(),
    amountB: z.string(),
});

export type CreatePoolFormValues = z.infer<typeof createPoolSchema>;
