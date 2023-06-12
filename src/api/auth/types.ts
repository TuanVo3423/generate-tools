export interface ISignUp {
  email: string;
  name: string;
  password: string;
  guestId?: string;
}

export interface ISignIn {
  email: string;
  password: string;
}
