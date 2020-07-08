import api from "src/actions/apiRequest";
import { LOGIN, SIGNUP, LOGOUT, ERROR } from "./actionTypes";

const handleLoggedIn = (user: any) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

const handleError = (error: { response: { data: string } }) => {
  const data = error.response ? error.response.data : error;
  return {
    type: ERROR,
    payload: data,
  };
};

const handleSignup = (user: any) => {
  return {
    type: SIGNUP,
    payload: user,
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
      if (data.error) {
        dispatch(handleError(data.error));
      } else {
        dispatch(handleLoggedIn(data));
        //TODO: set cookie
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
      if (data.error) {
        dispatch(handleError(data.error));
      } else {
        dispatch(handleSignup(data));
      }
    } catch (err) {
      dispatch(handleError(err));
    }
  };
};

export const logout = () => {
  return async (dispatch: Function) => {
    try {
      await api.get("/logout");
      dispatch(handleLogout);
    } catch (err) {
      dispatch(handleError(err));
    }
  };
};

export default { login, signup, logout };
