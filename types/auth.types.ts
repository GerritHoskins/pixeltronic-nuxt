export interface Auth {
  user: User;
  token: string;
}

export interface User {
  id: null | string;
  email: null | string;
  token: null | string;
  role: null | string;
}

export interface RequestParams {
  email: string;
  password: string;
}
