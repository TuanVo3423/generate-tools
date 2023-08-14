import { useGetAuth } from '@/api/auth';
import { PROJECT_AUTH_TOKEN } from '@/constants';
import { LocalStorage } from '@/services/localStorage';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { Path, publicPaths } from './data';
import { useAuthCheck } from './hook';

export const RouteGuard = ({ children }: { children: any }) => {
  const router = useRouter();
  const profile = LocalStorage.get(PROJECT_AUTH_TOKEN); // null
  const { checkAuthorization, authorized } = useAuthCheck();

  // nay kh co profile -> thi co ra dao
  useGetAuth({ enabled: !!profile });

  useEffect(() => {
    checkAuthorization(router.pathname);
    router.events.on('routeChangeComplete', checkAuthorization);
    return () => {
      router.events.off('routeChangeComplete', checkAuthorization);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  const childrenComponent = useMemo(() => {
    if (publicPaths.includes(router.pathname as Path)) return children;

    return children;
  }, [children, router.pathname]);

  if (authorized) return childrenComponent;

  return <></>;
};
