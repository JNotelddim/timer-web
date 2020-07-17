import React from "react";
import { useSelector, useDispatch } from "react-redux";

import WorkoutForm from "src/components/partials/WorkoutForm";
import { getCurrentWorkout } from "src/selectors/workout";
import { INewWorkout } from "src/types";
import { updateCurrentWorkout } from "src/actions/workout";

const NewWorkout = () => {
  const workout = useSelector(getCurrentWorkout);
  const dispatch = useDispatch();

  const setWorkout = (workout: INewWorkout) => {
    dispatch(updateCurrentWorkout(workout));
  };

  return <WorkoutForm initialValues={{}} setWorkout={setWorkout} />;
};

export default NewWorkout;
