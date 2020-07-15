import { Action } from "src/types";
import { ERROR, GET_WORKOUTS } from "src/actions/actionTypes";
import { WorkoutState } from "src/types";

const initialState: WorkoutState = {
  workouts: [],
};

export const workoutReducer = (
  state: WorkoutState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case GET_WORKOUTS:
      return { ...state, workouts: payload };
    case ERROR:
    default:
      return state;
  }
};

export default workoutReducer;
