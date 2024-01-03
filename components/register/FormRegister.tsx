'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '../ui/form';
import { Button } from '../ui/button';
import { registerSchema } from '@/lib/formSchema';
import FormInput from '../form-input';
import FormSelect from '../form-select';
import { registerAction } from '@/lib/action';
import { useToast } from '../ui/use-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { errorHandler } from '@/lib/errorHandler';
import CryptoJS from 'crypto-js';
import Link from 'next/link';

export default function FormRegister() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      role: 'user',
    },
  });

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    const hashedPassword = CryptoJS.SHA256(values.password).toString();

    const data = {
      ...values,
      password: hashedPassword,
    };

    setIsLoading(true);
    try {
      await registerAction(data);
      toast({
        title: 'Success register account',
      });
      form.reset();
      router.push('/login');
    } catch (error: any) {
      const { title, description } = errorHandler(error);

      toast({
        variant: 'destructive',
        title,
        description,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-4'
      >
        <FormInput form={form} name='name' label='Name' placeholder='Name' />
        <FormInput
          form={form}
          name='email'
          label='Email address'
          placeholder='Email address'
        />
        <FormSelect
          form={form}
          name='role'
          label='Role'
          placeholder='Select an role'
          defaultValue='user'
          options={[
            {
              value: 'user',
              label: 'User',
            },
            {
              value: 'admin',
              label: 'Admin',
            },
          ]}
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
          Have an account?{' '}
          <Link href={'/login'} className='text-blue-300'>
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
}
