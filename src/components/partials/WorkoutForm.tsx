import React, { ChangeEvent, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Box, TextField, IconButton, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { INewSet, INewWorkout, INewExercise } from "src/types";

const initialExercise: INewExercise = {
  reps: 6,
  duration: 60,
};

const initialSet: INewSet = {
  title: "",
  reps: 2,
  exercises: [{ ...initialExercise }],
};

const initialWorkout: INewWorkout = {
  title: "",
  sets: [],
};

const InputComponent = (field: {
  input: {
    value: any;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}) => (
  <TextField
    label="Workout title"
    fullWidth
    value={field.input.value}
    onChange={field.input.onChange}
  />
);

const WorkoutForm = () => {
  const [workout, setWorkout] = useState<INewWorkout>({ ...initialWorkout });

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

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" maxWidth={600} margin="auto">
        <Field
          name="title"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setWorkout({ ...workout, title: event.currentTarget.value })
          }
          component={InputComponent}
          type="text"
        />

        {sets &&
          sets.length > 0 &&
          sets.map((set) => (
            <Box
              boxShadow={2}
              borderRadius={8}
              margin={3}
              padding={3}
              display="flex"
              flexDirection="column"
            >
              <TextField
                label="Set Title"
                margin="normal"
                value={set.title}
                onChange={(event) => {
                  set.title = event.target.value;
                }}
              />
              <TextField
                label="Reps"
                value={set.reps}
                type="number"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  // set.reps = event.currentTarget.value;
                }}
              />

              {set.exercises &&
                set.exercises.length > 0 &&
                set.exercises.map((exercise) => <Box margin={6}>Exercise</Box>)}
            </Box>
          ))}

        <Box display="flex" alignSelf="flex-end" my={4}>
          <IconButton
            onClick={() => {
              setWorkout({
                ...workout,
                sets: [...workout.sets, { ...initialSet }],
              });
            }}
          >
            <Add />
          </IconButton>
        </Box>

        <Box display="flex" alignSelf="flex-end">
          <Button type="submit">Submit</Button>
        </Box>
      </Box>
    </form>
  );
};

export default reduxForm({ form: "workout" })(WorkoutForm);
