import { columnsUser } from '@/components/columns/columnsUser';
import { DataTable } from '@/components/columns/data-table';
import FilterSelect from '@/components/filter-select';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { stats } from '@/data/stats';
import { getUser } from '@/hooks/getUser';
import { optionRole, optionSort } from '@/lib/options';
import { PropsParams } from '@/types/search-params';
import { Suspense } from 'react';

type PropsSearchParams = {
  searchParams: PropsParams;
};

export default async function Page({ searchParams }: PropsSearchParams) {
  const params = {
    search: searchParams.search ?? '',
    page: searchParams.page ?? '1',
    sort: searchParams.sort ?? 'desc',
    role: searchParams.role ?? 'all',
  };

  const { data, total } = await getUser(params);

  return (
    <div className='flex flex-col p-4 gap-4'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {stats.map((value, index) => (
          <Card key={index}>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                {value.title}
              </CardTitle>
              {value.icon}
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{value.title}</div>
              <p className='text-xs text-muted-foreground'>{value.lastMonth}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
        <Search />
        <div className='flex flex-col md:flex-row gap-3'>
          <FilterSelect
            name='sort'
            placeholder='Sort by'
            defaultValue={params.sort}
            options={optionSort}
          />
          <FilterSelect
            name='role'
            placeholder='Select role'
            defaultValue={params.role}
            options={optionRole}
          />
        </div>
      </div>

      <div>
        <DataTable columns={columnsUser} data={data} />
      </div>
      <div className='flex flex-col gap-2'>
        <Pagination total={total} />
        <p className='flex justify-center'>Showing {data.length} data</p>
      </div>
    </div>
  );
}
