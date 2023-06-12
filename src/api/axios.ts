import { PROJECT_AUTH_TOKEN } from '@/constants';
import { LocalStorage } from '@/services/localStorage';
import { ERROR } from '@/types';
import axios, { AxiosResponse } from 'axios';

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

const TIMEOUT = 5 * 60 * 1000; // 5 minutes

// let isFetchingNewToken = false;
let waitForLogout = false;

const clearLocalStorageAndGotoLogin = () => {
  waitForLogout = true;
  localStorage.clear();
  setTimeout(() => {
    window.location.replace('/auth/sign-in');
  }, 3000);
};

// const getToken = () => {
//   const authInfo = LocalStorage.get(PROJECT_AUTH_TOKEN);
//   return _get(authInfo, 'token', '');
// };

// const handleRefreshToken = async () => {
//   try {
//     isFetchingNewToken = true;
//     const authInfo = LocalStorage.get(PROJECT_AUTH_TOKEN);
//     const resp = await axios.post(`${apiBaseUrl}v1/auth/refresh-token`, {
//       refresh_token: authInfo.refresh_token,
//     });

//     const { token, token_expired_at, refresh_token } = resp.data;
//     LocalStorage.set(PROJECT_AUTH_TOKEN, {
//       ...authInfo,
//       token,
//       refresh_token,
//       token_expired_at,
//     });
//     return token;
//   } catch (error: any) {
//     // const message = _get(error, 'response.data.message', '');
//     // if (message) {
//     //   toast({
//     //     description: message,
//     //     status: 'error',
//     //   });
//     // }
//     clearLocalStorageAndGotoLogin();
//   } finally {
//     isFetchingNewToken = false;
//   }
// };

// const waitForGetNewToken = async () => {
//   const token = await new Promise((resolve) => {
//     const timer = setInterval(() => {
//       if (!isFetchingNewToken) {
//         clearInterval(timer);
//         resolve(getToken());
//       }
//     }, 200);
//   });
//   return token;
// };

const request = axios.create({
  baseURL: apiBaseUrl,
  timeout: TIMEOUT,
});

// Request interceptor for API calls
// @ts-ignore
request.interceptors.request.use(async (request) => {
  // if (waitForLogout) return;

  // const authInfo = LocalStorage.get(PROJECT_AUTH_TOKEN);
  // let token = _get(authInfo, 'token', '');
  // const tokenExpiredTime = _get(authInfo, 'token_expired_at', '');
  // const currentTime = getCurrentUnixTime();

  // if (authInfo && tokenExpiredTime < currentTime) {
  //   if (isFetchingNewToken) {
  //     token = await waitForGetNewToken();
  //   } else {
  //     token = await handleRefreshToken();
  //   }
  // }
  // @ts-ignore
  request.headers = {
    ...request.headers,
    // Authorization: ``,
  };

  // const tokenOutside = request.headers.tokenOutside;

  // if (token || tokenOutside) {
  //   request.headers.Authorization = `Bearer ${tokenOutside || token}`;
  // }

  // delete request.headers.tokenOutside;

  return request;
});

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error) => {
    if (waitForLogout) return;

    const { status, data, config } = error?.response || {};
    switch (status) {
      case ERROR.UNAUTHORIZED: {
        if (!LocalStorage.get(PROJECT_AUTH_TOKEN)) {
          // if (data?.message) {
          //   toast({
          //     description: data?.message,
          //     status: "error",
          //   });
          // }
          clearLocalStorageAndGotoLogin();
          return;
        }

        let token;

        // if (isFetchingNewToken) {
        //   token = await waitForGetNewToken();
        // } else {
        //   token = await handleRefreshToken();
        // }

        return request({
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        });
      }
      case ERROR.FORBIDDEN: {
        // if (data?.message) {
        //   toast({
        //     description: data?.message,
        //     status: "error",
        //   });
        // }
        clearLocalStorageAndGotoLogin();
        return;
      }
    }

    return Promise.reject(data);
  }
);

export { request };
