import * as yup from 'yup';

export interface IUserSignUp {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface UserInfo {
  username: string;
  city: string;
  email: string;
}

// create schema object

export const schema_signup = yup
  .object({
    name: yup.string().required('Please enter your username...'),
    email: yup
      .string()
      .email('must be a valid email')
      .required('Please enter your email...'),
    password: yup
      .string()
      .required('Please enter your password...')
      .min(6, 'Please enter your username at least 6 characters'),
    confirm_password: yup
      .string()
      .required('Please enter your confirm password...')
      .min(6, 'Please enter your password at least 6 characters')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })
  .required();
