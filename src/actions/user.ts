import api from "src/actions/apiRequest";
import { LOGIN, SIGNUP, LOGOUT, ERROR } from "./actionTypes";

const handleLoggedIn = ({ user }: any) => {
  return {
    type: LOGIN,
    payload: {
      user,
    },
  };
};

const handleError = (error: any) => {
  return {
    type: ERROR,
    payload: {
      error,
    },
  };
};

const handleSignup = (user: any) => {
  return {
    type: SIGNUP,
    payload: {
      user: {},
    },
  };
};

const handleLogout = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Function) => {
    try {
      const { data } = await api.post("/login", { data: { email, password } });
      console.log(data);
      if (data.error) {
        dispatch(handleError(data.error));
      } else {
        dispatch(handleLoggedIn(data));
      }
    } catch (err) {
      dispatch(handleError(err));
    }
  };
};

export const signup = (email: string, password: string) => {
  return async (dispatch: Function) => {
    try {
      const { data } = await api.post("/signup", { data: { email, password } });
      console.log(data);
      dispatch(handleSignup(data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
};

export const logout = () => {
  return async (dispatch: Function) => {
    try {
      const { data } = await api.get("/logout");
      dispatch(handleLogout);
    } catch (err) {
      dispatch(handleError(err));
    }
  };
};

export default { login, signup, logout };
