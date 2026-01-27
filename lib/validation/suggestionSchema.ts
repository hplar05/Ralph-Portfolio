import { z } from "zod"

export const SuggestionSchema = z.object({
    text: z.string()
        .min(10, { message: "Minimum length of text is 10" })
        .max(100, { message: "Maximum length of text is 100" }),
    
    // Instead of putting the error in z.string(), 
    // put it in .min(1) to handle empty strings properly.
    name: z.string()
        .min(1, { message: "Name is required!" })
        .min(3, { message: "Name must be at least 3 characters" }),

    email: z.string()
        .min(1, { message: "Email is required!" })
        .email({ message: "Invalid email address" })
        .refine(email => email.length <= 255, { message: "Email is too long" }),
})

export type SuggestionType = z.infer<typeof SuggestionSchema>