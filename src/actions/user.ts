import { LOGIN, SIGNUP, LOGOUT } from "./types";

export const login = (email: string, password: string) => {
  //TODO: call API
  return {
    type: LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const signup = (email: string, password: string) => {
  //TODO: call API
  return {
    type: SIGNUP,
    payload: {
      email,
      password,
    },
  };
};

export const logout = () => {
  console.log(`Logout~`);
  //TODO: call API
  return {
    type: LOGOUT,
  };
};

export default { login, logout };
