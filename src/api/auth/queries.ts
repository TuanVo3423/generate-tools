import { useQuery } from 'react-query';
import { getAuth, getDocuments } from './request';
import { useAuth } from '@/store';
import { getCookie } from 'cookies-next';

export const useGetAuth = (options?: any) => {
  console.log('useGetAuth');
  const setProfile = useAuth((state) => state.setProfile);

  const token = getCookie('Authorization');

  const { data, ...rest } = useQuery(
    ['getAuth'],
    async () => {
      const data = await getAuth();
      setProfile(data);

      return data;
    },
    { enabled: !!token, ...options }
  );

  return { data, ...rest };
};

export const useGetDocumentOfUser = (options?: any) => {
  const { data, ...rest } = useQuery(
    ['getDocumentOfUser'],
    async () => {
      const data = await getDocuments();
      return data;
    },
    {
      ...options,
    }
  );
  return { data, ...rest };
};
