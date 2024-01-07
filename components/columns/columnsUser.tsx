'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
};

export const columnsUser: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    header: 'Action',
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className='flex gap-2'>
          <Button size={'sm'}>Edit</Button>
          <Button variant={'destructive'} size={'sm'}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
