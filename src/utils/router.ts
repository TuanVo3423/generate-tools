import { NextRouter } from 'next/router';

export const getCurrentUnixTime = () => new Date().valueOf() / 1000;

export const handleBackRouter = (router: NextRouter, defaultURL = '') => {
  if (typeof window !== 'undefined') {
    if (window.history.length > 1) {
      router.back();
    } else if (defaultURL) {
      router.push(defaultURL);
    }
  }
};
