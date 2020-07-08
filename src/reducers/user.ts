import { LOGIN, LOGOUT, SIGNUP, ERROR } from "src/actions/actionTypes";

import { State, Action } from "src/types";

const initialState: State = {
  user: undefined,
  error: undefined,
};

const userReducer = (
  state: State = initialState,
  { type, payload }: Action
) => {
  // console.log("reducer, ", type, payload);
  switch (type) {
    case LOGIN:
      return { ...state, user: payload.user };
    case SIGNUP:
      return { ...state, user: payload.user };
    case ERROR:
      return { ...state, error: payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
