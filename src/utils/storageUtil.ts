type TokenObject = {
  accessToken: string;
  refreshToken: string;
};

const storageUtil = {
  setToken: (tokenObj: TokenObject): void => {
    localStorage.setItem("accessToken", tokenObj.accessToken);
  },
  getToken: (): string | null => localStorage.getItem("accessToken"),
  clearToken: (): void => {
    localStorage.removeItem("accessToken");
  },
};

export default storageUtil;
