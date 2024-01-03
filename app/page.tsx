import useAuthSession from '@/lib/useAuthSession';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await useAuthSession();

  if (session) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}
