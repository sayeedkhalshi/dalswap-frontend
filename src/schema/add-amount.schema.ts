// types.ts

import * as z from "zod";

export const addAmountSchema = z.object({
    amountA: z.string(),
    amountB: z.string(),
});

export type AddAmountFormValues = z.infer<typeof addAmountSchema>;
