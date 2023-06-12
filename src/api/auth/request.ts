import { request } from '../axios';
import { ISignIn, ISignUp } from './types';

export const signUp = async (data: ISignUp) => {
  const res = await request({
    url: `signup`,
    method: 'POST',
    data,
  });
  return res;
};

export const signIn = async (data: ISignIn) => {
  const res = await request({
    url: `login`,
    method: 'POST',
    data,
  });
  return res;
};

export const getAuth = async () => {
  const res = await request({
    url: `auth`,
    method: 'GET',
  });
  return res;
};
