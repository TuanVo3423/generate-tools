import * as yup from 'yup';

export interface IUserLogin {
  email: string;
  password: string;
}

export interface UserInfo {
  username: string;
  city: string;
  email: string;
}

// create schema object

export const schema_login = yup
  .object({
    email: yup
      .string()
      .email('must be a valid email')
      .required('Please enter your email...'),
    password: yup
      .string()
      .required('Please enter your password...')
      .min(6, 'Please enter your username at least 6 characters'),
  })
  .required();
