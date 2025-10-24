import { z } from "zod";
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name too long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const billingSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  email: z.string().email("Invalid email"),
  cardNumber: z.string().min(12, "Card Number is too short"),
  expiry: z.string().min(4, "Expiry is required"),
  cvc: z.string().min(3, "CVC is required"),
  paymentMethod: z.enum(["credit", "paypal", "crypto"]),
});
