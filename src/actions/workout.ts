import { Workout } from "src/types";
import { GET_WORKOUTS } from "src/actions/actionTypes";
import api from "src/actions/apiRequest";
import { handleError } from "src/actions/errorHandler";

const handleWorkouts = (workouts: Workout[]) => ({
  type: GET_WORKOUTS,
  payload: workouts,
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
export default { getWorkouts };
