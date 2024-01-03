import ButtonLogout from '@/components/button-logout';
import useAuthSession from '@/lib/useAuthSession';

export default async function Page() {
  const session = await useAuthSession();
  return (
    <div className='p-4'>
      <p>Dashboard Page</p>
      <ButtonLogout />
    </div>
  );
}
