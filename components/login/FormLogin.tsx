'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import FormInput from '../form-input';
import { Button } from '../ui/button';
import { Form } from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import { loginSchema } from '@/lib/formSchema';
import { signIn } from 'next-auth/react';
import { redirectTo } from '@/lib/action';
import Link from 'next/link';

export default function FormLogin() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.ok) {
      window.location.reload();
    } else {
      toast({
        variant: 'destructive',
        title: `${signInData?.error}`,
      });
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-4'
      >
        <FormInput
          form={form}
          name='email'
          label='Email'
          placeholder='Email address'
        />
        <FormInput
          form={form}
          name='password'
          label='Password'
          placeholder='Password'
        />
        <Button
          type='submit'
          disabled={isLoading}
          className='w-full mt-4 disabled:bg-slate-400'
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
        <p>
          New?{' '}
          <Link href={'/register'} className='text-blue-300'>
            Register
          </Link>
        </p>
      </form>
    </Form>
  );
}
