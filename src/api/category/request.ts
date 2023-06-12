import { request } from '../axios';
import { GetParams, ResponseWithPagination } from '../commonTypes';
import { ICategory, ICategoryDetails } from './types';

export const getCategories = async (query: GetParams) => {
  const res = await request({
    url: 'categories',
    method: 'GET',
    params: query,
  });

  return res as ResponseWithPagination<ICategory>;
};

export const getCategory = async (categoryId: number) => {
  const res = await request({
    url: `categories/${categoryId}`,
    method: 'GET',
  });

  return res as { data: ICategoryDetails; message: string };
};
