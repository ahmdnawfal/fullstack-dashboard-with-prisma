import FormRegister from '@/components/register/FormRegister';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Page() {
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
