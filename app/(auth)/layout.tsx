import Image from 'next/image';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <section className='grid min-h-screen grid-cols-1 md:grid-cols-2 gap-4 items-center'>
      <div className='hidden md:block'>
        <Image
          alt='bg'
          width={800}
          height={700}
          src={'/assets/images/bg-auth.png'}
        />
      </div>
      <div>{children}</div>
    </section>
  );
}
