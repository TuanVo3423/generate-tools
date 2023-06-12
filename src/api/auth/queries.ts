import { useQuery } from 'react-query';
import { getAuth } from './request';

export const useGetAuth = (options?: any) =>
  useQuery(
    ['getAuth'],
    async () => {
      const data = await getAuth();

      return data;
    },
    { ...options }
  );
