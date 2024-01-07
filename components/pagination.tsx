'use client';

import { usePagination } from '@/store/usePagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

type PropPagintaion = {
  total: number;
};

const Pagination = ({ total }: PropPagintaion) => {
  const setIsLoading = usePagination((state: any) => state.setIsLoading);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const queryPage = Number(params?.get('page'));

  const [currentPage, setCurrentPage] = useState<number>(queryPage);

  const createPageURL = (pageNumber: number | string) => {
    params.set('page', pageNumber.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setCurrentPage(queryPage || 1);
  }, [queryPage]);

  const onChangePagination = async (newPage: number) => {
    setIsLoading(true);
    await createPageURL(newPage);
    await setCurrentPage(newPage);
    setIsLoading(false);
  };

  return (
    <ResponsivePagination
      current={currentPage}
      total={Math.ceil(total / 10)}
      onPageChange={onChangePagination}
    />
  );
};

export default Pagination;
