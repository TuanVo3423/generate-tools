export enum Path {
  HOME = '/',
  LOGIN = '/auth/sign-in',
  SIGN_UP = '/auth/sign-up',
  FORGOT_PASSWORD = '/auth/forgot-password',
  // GENERATE_DOCUMENT = '/generate-document',
}

export const publicPaths = [
  Path.LOGIN,
  Path.SIGN_UP,
  Path.HOME,
  Path.FORGOT_PASSWORD,
  // Path.GENERATE_DOCUMENT,
];
