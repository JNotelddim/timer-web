import { User } from "src/types";
import api from "src/actions/apiRequest";
import { handleError } from "src/actions/errorHandler";
import { LOGIN, SIGNUP, LOGOUT } from "src/actions/actionTypes";

const handleLoggedIn = (user: User) => {
  return {
    type: LOGIN,
    payload: user,
  };
};

const handleSignup = (user: User) => {
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
      const response = await api.get("/logout");
      //TODO: fix logout -- it doens't seem to be working? ~ I'd expect the page to try and rerender after the state updates,
      // and then for it to get kicked back to /login because the auth state was reset.. but no luck so far.
      console.log(`Logout response: ${response}`);
      dispatch(handleLogout);
    } catch (err) {
      dispatch(handleError(err));
    }
  };
};

export default { login, signup, logout };
