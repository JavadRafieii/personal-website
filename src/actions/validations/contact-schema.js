import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "Name must be at least 3 characters.")
        .max(50, "Name cannot exceed 50 characters."),

    email: z
        .email("Please enter a valid email address.")
        .max(100, "Email cannot exceed 100 characters."),

    subject: z
        .string()
        .trim()
        .min(5, "Subject must be at least 5 characters.")
        .max(100, "Subject cannot exceed 100 characters."),

    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters.")
        .max(1000, "Message cannot exceed 1000 characters."),
});