'use client';

import { signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { useState } from 'react';

const ButtonLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    await signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/login`,
    });
    setIsLoading(false);
  };

  return (
    <Button
      disabled={isLoading}
      onClick={handleLogout}
      type='button'
      className='disabled:bg-slate-400 w-full'
    >
      {isLoading ? 'Loading...' : 'Logout'}
    </Button>
  );
};

export default ButtonLogout;
