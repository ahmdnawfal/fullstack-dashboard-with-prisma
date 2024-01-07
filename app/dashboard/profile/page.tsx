import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import useAuthSession from '@/lib/useAuthSession';

const Profile = async () => {
  const session = await useAuthSession();

  return (
    <Card className='w-full'>
      <CardContent>
        <div className='mt-5 flex flex-col gap-4'>
          <div className='flex flex-col gap-2 text-gray-500'>
            <div className='flex flex-col'>
              <p className='whitespace-nowrap w-full overflow-hidden text-ellipsis'>
                Name:
              </p>
              <p className='whitespace-nowrap w-full overflow-hidden text-ellipsis text-black'>
                {session?.name}
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='whitespace-nowrap w-full overflow-hidden text-ellipsis'>
                Email:
              </p>
              <p className='whitespace-nowrap w-full overflow-hidden text-ellipsis text-black'>
                {session?.email}
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='whitespace-nowrap w-full overflow-hidden text-ellipsis'>
                Role:
              </p>
              <Badge className='w-max'>{session?.role}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
