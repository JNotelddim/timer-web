import { LOGIN, LOGOUT, SIGNUP, ERROR } from "src/actions/actionTypes";

import { State, Action } from "src/types";

const initialState: State = {
  isAuthenticated: false,
  user: undefined,
  error: undefined,
};

const userReducer = (
  state: State = initialState,
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
