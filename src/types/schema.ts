import z from "zod";


export const signupSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
})

export const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
})


export const accountSchema = z.object({
    account: z.string(),
   
})