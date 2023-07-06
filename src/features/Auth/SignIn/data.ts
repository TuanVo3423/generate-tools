import * as yup from 'yup';

export interface IUserLogin {
  username: string;
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
    username: yup
      .string()
      .required('Please enter your username...')
      .min(4, 'Please enter your username at least 4 characters'),
    password: yup
      .string()
      .required('Please enter your password...')
      .min(6, 'Please enter your username at least 6 characters'),
  })
  .required();
