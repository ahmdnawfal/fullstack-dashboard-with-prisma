import FormLogin from '@/components/login/FormLogin';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Page() {
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
