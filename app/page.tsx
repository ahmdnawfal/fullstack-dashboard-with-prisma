import useAuthSession from '@/lib/useAuthSession';

const Page = async () => {
  const session = await useAuthSession();

  if (session) {
    return <p>Your Logged in</p>;
  }

  return <div>Hello world</div>;
};

export default Page;
