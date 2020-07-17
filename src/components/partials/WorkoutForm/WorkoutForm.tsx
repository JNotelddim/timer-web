import React, { ChangeEvent, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Box, IconButton, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { INewSet, INewWorkout } from "src/types";
import TextFieldInput from "src/components/partials/WorkoutForm/components/TextFieldInput";
import WorkoutSet from "./components/WorkoutSet";
import { getId } from "./helperFns";

const initialSet: INewSet = {
  id: getId(),
  title: "",
  reps: 2,
  exercises: [],
};

// const initialWorkout: INewWorkout = {
//   title: "",
//   sets: [],
// };

type WorkoutFormProps = {
  initialValues: INewWorkout;
  setWorkout: (workout: INewWorkout) => void;
};

const WorkoutForm = ({ initialValues, setWorkout }: WorkoutFormProps) => {
  // const [workout, setWorkout] = useState<INewWorkout>({ ...initialWorkout });

  const workout = initialValues;
  let { title, sets } = workout;

  console.log(workout);
  //one workout, starts w/ no sets
  // has "add set" btn,
  // ^ creates new set w/ no exercises : {title, exercises, reps }
  // has "add exercise" btn
  // ^ creates new exercise: {title, description, reps, duration}

  const handleSubmit = (values: any) => {
    console.log(values);
    // debugger;
  };

  const addWorkoutSet = () => {
    setWorkout({
      ...workout,
      sets: [...workout.sets, { ...initialSet, id: getId() }],
    });
  };

  const updateWorkoutSet = (set: INewSet) => {
    setWorkout({
      ...workout,
      sets: [...workout.sets.filter((s) => s.id !== set.id), set],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" maxWidth={600} margin="auto">
        <Field
          label="Workout Title"
          name="workout-title"
          value={title}
          type="text"
          component={TextFieldInput}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setWorkout({ ...workout, title: event.currentTarget.value })
          }
        />

        {sets &&
          sets.length > 0 &&
          sets.map((set) => (
            <WorkoutSet
              key={set.id}
              set={set}
              updateWorkoutSet={updateWorkoutSet}
            />
          ))}

        <Box display="flex" alignSelf="flex-end" my={4}>
          <IconButton onClick={addWorkoutSet}>
            <Add />
          </IconButton>
        </Box>

        <Box display="flex" alignSelf="flex-end">
          <Button type="submit">Save</Button>
        </Box>
      </Box>
    </form>
  );
};

export default reduxForm({ form: "workout", enableReinitialize: true })(
  WorkoutForm
);
