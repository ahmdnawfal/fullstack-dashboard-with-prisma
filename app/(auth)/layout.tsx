import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
      <div className='bg-auth min-h-screen hidden md:block' />
      <div>{children}</div>
    </section>
  );
}
