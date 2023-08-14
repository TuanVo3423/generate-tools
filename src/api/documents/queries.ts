import { QueryOptions, useQuery } from 'react-query';
import { getDocument } from './request';

export const useGetDocument = (document_id: string, options?: any) =>
  useQuery(
    ['getDocument', document_id],
    async () => {
      return await getDocument(document_id);
    },
    { ...options }
  );
