'use server';

import prisma from '@/lib/db';
import { PropsParams } from '@/types/search-params';

export const getUser = async (params: PropsParams) => {
  let whereConditions: any[] = [];

  if (params.search) {
    whereConditions.push({
      OR: [
        {
          name: {
            contains: params.search,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: params.search,
            mode: 'insensitive',
          },
        },
      ],
    });
  }

  if (params.role && params.role !== 'all') {
    whereConditions.push({
      role: params.role,
    });
  }

  const data = await prisma.user.findMany({
    take: 10,
    skip:
      !params.page || Number(params.page) === 1
        ? 0
        : Number(params.page) - Number(params.page) + 10,
    orderBy: {
      createdAt: params.sort,
    },
    where: {
      AND: whereConditions,
    },
  });
  const total = await prisma.user.count({
    where: {
      AND: whereConditions,
    },
  });

  return { data, total };
};
