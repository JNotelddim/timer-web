import { LOGIN, LOGOUT, SIGNUP } from "src/actions/actionTypes";

import { State, Action } from "src/types";

const initialState: State = {
  user: undefined,
};

const userReducer = (
  state: State = initialState,
  { type, payload }: Action
) => {
  console.log(type, payload);
  switch (type) {
    case LOGIN:
      return { ...state, user: payload.user };
    case SIGNUP:
      return { ...state, user: payload.user };
    case LOGOUT:
    default:
      return state;
  }
};

export default userReducer;
