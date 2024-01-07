'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

type PropPagintaion = {
  total: number;
};

const Pagination = ({ total }: PropPagintaion) => {
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

  const onChangePagination = (newPage: number) => {
    setCurrentPage(newPage);
    createPageURL(newPage);
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
