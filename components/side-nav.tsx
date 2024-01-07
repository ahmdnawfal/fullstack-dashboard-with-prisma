import Image from 'next/image';
import ButtonLogout from './button-logout';
import Navlinks from './nav-links';

export default function SideNav() {
  return (
    <div className='flex h-full rounded-md border flex-col px-3 py-4 md:px-2 w-full'>
      <div className='mb-9'>
        <Image
          alt='Logo'
          src={'/assets/images/logo.png'}
          width={200}
          height={150}
        />
      </div>

      <div className='flex grow justify-between md:flex-col '>
        <div className='flex flex-col gap-4'>
          <Navlinks />
        </div>
        <div className='w-full'>
          <ButtonLogout />
        </div>
      </div>
    </div>
  );
}
