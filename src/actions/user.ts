import { LOGIN, SIGNUP, LOGOUT, ERROR } from "./actionTypes";
import api from "src/actions/apiRequest";

export const login = async (email: string, password: string) => {
  try {
    //TODO: call API
    const { data } = await api.get("/login", { data: { email, password } });
    console.log(data);

    return {
      type: LOGIN,
      payload: {
        user: {},
      },
    };
  } catch (err) {
    return {
      type: ERROR,
      payload: {
        error: err,
      },
    };
  }
};

export const signup = (email: string, password: string) => {
  //TODO: call API
  return {
    type: SIGNUP,
    payload: {
      user: {},
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
