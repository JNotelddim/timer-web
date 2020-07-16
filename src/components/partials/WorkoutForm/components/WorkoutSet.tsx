import React, { ChangeEvent, SetStateAction } from "react";
import { Box } from "@material-ui/core";
import { Field } from "redux-form";

import { INewSet, INewWorkout } from "src/types";
import TextFieldInput from "./TextFieldInput";

type SetProps = {
  set: INewSet;
  addWorkoutSet: (set: INewSet) => void;
  updateWorkoutSet: (set: INewSet) => void;
};

const WorkoutSet = ({ set, addWorkoutSet, updateWorkoutSet }: SetProps) => {
  return (
    <Box
      boxShadow={2}
      borderRadius={8}
      margin={3}
      padding={3}
      display="flex"
      flexDirection="column"
    >
      <Field
        label="Set Title"
        name={`set-${set.id}-title`}
        value={set.title}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          updateWorkoutSet({ ...set, title: event.currentTarget.value })
        }
        component={TextFieldInput}
      />

      {/* <TextField
        label="Set Title"
        margin="normal"
        value={set.title}
        onChange={(event) => {
          set.title = event.target.value;
        }}
      /> */}

      <Field
        label="Reps"
        name={`set-${set.id}-reps`}
        value={set.reps}
        type="number"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const numericalValue: number = Number.parseInt(
            event.currentTarget.value
          );

          updateWorkoutSet({ ...set, reps: numericalValue });
        }}
        component={TextFieldInput}
      />

      {/* <TextField
        label="Reps"
        value={set.reps}
        type="number"
        margin="normal"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          // set.reps = event.currentTarget.value;
        }}
      /> */}

      {set.exercises &&
        set.exercises.length > 0 &&
        set.exercises.map((exercise) => (
          <Box key={exercise.id} margin={6}>
            Exercise
          </Box>
        ))}
    </Box>
  );
};

export default WorkoutSet;
