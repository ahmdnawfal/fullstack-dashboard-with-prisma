'use server';

import * as z from 'zod';
import { revalidatePath } from 'next/cache';
import { registerSchema } from './formSchema';
import prisma from './db';
import { redirect } from 'next/navigation';

export async function registerAction(data: z.infer<typeof registerSchema>) {
  const response = await prisma.user.create({ data });
  revalidatePath('/dashboard');
  return response;
}

export async function redirectTo(path: string) {
  redirect(path);
}
