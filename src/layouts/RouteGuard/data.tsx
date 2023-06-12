export enum Path {
  LOGIN = '/auth/sign-in',
  SIGN_UP = '/auth/sign-up',
  CREATE_PROJECT = '/create-project',
  FORGOT_PASSWORD = '/auth/forgot-password',
}

export const publicPaths = [
  Path.LOGIN,
  Path.SIGN_UP,
  Path.CREATE_PROJECT,
  Path.FORGOT_PASSWORD,
];
