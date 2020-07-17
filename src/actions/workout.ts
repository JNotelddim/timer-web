import { Workout, INewWorkout } from "src/types";
import { GET_WORKOUTS, UPDATE_CURRENT_WORKOUT } from "src/actions/actionTypes";
import api from "src/actions/apiRequest";
import { handleError } from "src/actions/errorHandler";

const handleWorkouts = (workouts: Workout[]) => ({
  type: GET_WORKOUTS,
  payload: workouts,
});

const handleUpdateCurrentWorkout = (workout: INewWorkout) => ({
  type: UPDATE_CURRENT_WORKOUT,
  payload: workout,
});

export const getWorkouts = () => {
  return async (dispatch: Function) => {
    try {
      const { data } = await api.get("/workouts", { withCredentials: true });
      if (data.error) {
        dispatch(handleError(data.error));
      } else {
        dispatch(handleWorkouts(data));
      }
    } catch (err) {
      dispatch(handleError(err));
    }
  };
};

export const updateCurrentWorkout = (workout: INewWorkout) => {
  return async (dispatch: Function) => {
    dispatch(handleUpdateCurrentWorkout(workout));
  };
};

export default { getWorkouts };
