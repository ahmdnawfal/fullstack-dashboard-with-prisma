import FormLogin from '@/components/login/FormLogin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useAuthSession from '@/lib/useAuthSession';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await useAuthSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <section className='min-h-screen flex justify-center items-center p-4'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
      </Card>
    </section>
  );
}
