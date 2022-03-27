export type AuthSuccess = {
  data: {
    login: string;
    role: number;
  };
};
export type AuthError = {
  message: string;
};

export type FormDataAuth = {
  login: string;
  password: string;
}

export type FormDataPassword = {
  password: string;
  token: string;
}

export type FormDataEmail = {
  email: string;
}