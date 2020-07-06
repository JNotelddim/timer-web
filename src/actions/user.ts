import { LOGIN, LOGOUT } from "./types";

export const login = (username: string, password: string) => {
  //TODO: call API
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
};

export const logout = () => {
  //TODO: call API
  return {
    type: LOGOUT,
  };
};

export default { login, logout };
