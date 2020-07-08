import { Workout } from "src/types";
import { GET_WORKOUTS, GET_WORKOUT_BY_ID } from "src/actions/actionTypes";
import api from "src/actions/apiRequest";
import { handleError } from "src/actions/errorHandler";

const handleWorkouts = (workouts: Workout[]) => ({
  type: GET_WORKOUTS,
  payload: workouts,
});

export const getWorkouts = () => {
  return async (dispatch: Function) => {
    try {
      console.log(`Try fetch workouts`);
      const { data } = await api.get("/workouts");
      console.log(data);
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
