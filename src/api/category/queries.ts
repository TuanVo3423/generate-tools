import { useQuery } from 'react-query';
import { GetParams } from '../commonTypes';
import { getCategories, getCategory } from './request';

export const useGetCategories = (params: GetParams, options?: any) =>
  useQuery(
    ['getCategories', { ...params }],
    async () => {
      return await getCategories(params);
    },
    { ...options }
  );

export const useGetCategory = (categoryId: number, options?: any) =>
  useQuery(
    ['getCategory', categoryId],
    async () => {
      return await getCategory(categoryId);
    },
    { ...options }
  );
