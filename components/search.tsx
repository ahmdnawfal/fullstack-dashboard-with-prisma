'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from './ui/input';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      params.set('search', e);
      params.set('page', '1');
    } else {
      params.delete('search');
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 800);

  return (
    <Input
      type='text'
      placeholder='Search name or email...'
      className='w-[280px]'
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('search')?.toString()}
    />
  );
};

export default Search;
