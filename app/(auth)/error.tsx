'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-4'>
      <h2>Something went wrong</h2>
      <Button onClick={() => router.back()}>Return</Button>
    </div>
  );
}
