import { PROJECT_AUTH_TOKEN } from '@/constants';
import { LocalStorage } from '@/services/localStorage';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { Path, publicPaths } from './data';
import { useAuthCheck } from './hook';
import { useGetAuth } from '@/api/auth';
import { useAuth } from '@/store';

export const RouteGuard = ({ children }: { children: any }) => {
  const router = useRouter();
  const profile = LocalStorage.get(PROJECT_AUTH_TOKEN);
  const { checkAuthorization, authorized } = useAuthCheck();
  const setProfile = useAuth((state) => state.setProfile);

  const { data } = useGetAuth({ enabled: !!profile });
  setProfile(data);
  
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
