import { LOGIN, LOGOUT, SIGNUP, ERROR } from "src/actions/actionTypes";

import { UserState, Action } from "src/types";

const initialState: UserState = {
  isAuthenticated: false,
  user: undefined,
  error: undefined,
};

const userReducer = (
  state: UserState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case LOGIN:
      return { ...state, user: payload, isAuthenticated: true };
    case SIGNUP:
      return { ...state, user: payload, isAuthenticated: true };
    case ERROR:
      return { ...state, error: payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
