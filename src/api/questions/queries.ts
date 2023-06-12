import { useQuery } from 'react-query';
import { getQuestion } from './request';

export const useGetQuestion = (appId: number, options?: any) =>
  useQuery(
    ['getQuestion', appId],
    async () => {
      return await getQuestion(appId);
    },
    { ...options }
  );
