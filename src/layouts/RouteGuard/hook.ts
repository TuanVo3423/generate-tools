import { useAuth } from '@/store';
import _isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { Path, publicPaths } from './data';
import { LocalStorage } from '@/services/localStorage';
import { PROJECT_AUTH_TOKEN } from '@/constants';

export const useAuthCheck = () => {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  const profileStore = useAuth((state) => state.profile);
  const profile = LocalStorage.get(PROJECT_AUTH_TOKEN);

  // moi vo thi
  const checkAuthorization = useCallback(
    (url: string) => {
      console.log('profileStore: ', profileStore);
      const path = url.split('?')[0];
      const isPublicPath = publicPaths.includes(path as Path);
      if (
        (path === Path.LOGIN || path === Path.SIGN_UP) &&
        !_isEmpty(profileStore)
      ) {
        redirectToHome();
        return;
      }

      if (isPublicPath) {
        setAuthorized(true);
        return;
      }

      if (_isEmpty(profile)) {
        redirectToLogin();
        return;
      }

      if (_isEmpty(profileStore)) {
        setAuthorized(false);
        return;
      }
      setAuthorized(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [profileStore, pathname, profile]
  );

  const redirectToLogin = () => {
    setAuthorized(false);
    router.push('/auth/sign-in');
  };

  const redirectToHome = () => {
    setAuthorized(false);
    router.push('/generate-document');
  };

  return { checkAuthorization, authorized };
};
