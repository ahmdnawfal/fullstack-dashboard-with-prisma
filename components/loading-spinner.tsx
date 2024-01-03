'use client';

import { BeatLoader } from 'react-spinners';

export default function LoadingSpinner() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <BeatLoader color='#111111' speedMultiplier={0.8} />
    </div>
  );
}
