import { Action } from "src/types";
import {
  ERROR,
  GET_WORKOUTS,
  UPDATE_CURRENT_WORKOUT,
} from "src/actions/actionTypes";
import { WorkoutState } from "src/types";

const initialState: WorkoutState = {
  workouts: [],
  currentWorkout: undefined,
};

export const workoutReducer = (
  state: WorkoutState = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case GET_WORKOUTS:
      return { ...state, workouts: payload };
    case UPDATE_CURRENT_WORKOUT:
      return { ...state, currentWorkout: payload };
    case ERROR:
    default:
      return state;
  }
};

export default workoutReducer;
