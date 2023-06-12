import { useQuery } from 'react-query';
import { getDocument } from './request';

export const useGetDocument = (selectionId: number, options?: any) =>
  useQuery(
    ['getDocument'],
    async () => {
      const data = await getDocument(selectionId);
      return data;
    },
    { ...options }
  );
