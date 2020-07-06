import { LOGIN, LOGOUT } from "src/actions/types";

import { State, Action } from "../types";

const initialState: State = {
  user: undefined,
  cookie: undefined,
};

const userReducer = (
  state: State = initialState,
  { type, payload }: Action
) => {
  console.log(type, payload);
  switch (type) {
    case LOGIN:
      return { ...state, user: payload.user, cookie: payload.cookie };
    case LOGOUT:
    default:
      return state;
  }
};

export default userReducer;
