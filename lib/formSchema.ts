import * as z from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, 'Minimum 3 character'),
  email: z.string().email('Email not valid'),
  role: z.enum(['user', 'admin']),
  password: z.string().min(3, 'Minimum 3 character'),
});

export const loginSchema = z.object({
  email: z.string().email('Email not valid'),
  password: z.string().min(3, 'Minimum 3 character'),
});
