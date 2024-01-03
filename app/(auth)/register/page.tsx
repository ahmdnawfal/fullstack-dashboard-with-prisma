import FormRegister from '@/components/register/FormRegister';
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
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <FormRegister />
        </CardContent>
      </Card>
    </section>
  );
}
