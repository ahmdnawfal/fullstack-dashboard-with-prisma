'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-4'>
      <h2>Not Found</h2>
      <Button onClick={() => router.back()}>Return</Button>
    </div>
  );
}
