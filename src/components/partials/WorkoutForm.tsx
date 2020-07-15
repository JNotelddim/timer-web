import React, { ChangeEvent } from "react";
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

const WorkoutForm = () => {
  let workout = { ...initialWorkout };

  let { title, sets } = workout;

  //one workout, starts w/ no sets
  // has "add set" btn,
  // ^ creates new set w/ no exercises : {title, exercises, reps }
  // has "add exercise" btn
  // ^ creates new exercise: {title, description, reps, duration}

  const handleSubmit = (values: any) => {
    console.log(values);
    debugger;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" maxWidth={600} margin="auto">
        <Field
          name="title"
          component={(field: {
            input: { value: any; onChange: (event: ChangeEvent) => void };
          }) => (
            <TextField
              label="Workout title"
              fullWidth
              value={field.input.value}
              onChange={field.input.onChange}
            />
          )}
          type="text"
        />

        {/* {sets &&
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
                value={set.title}
                onChange={(event) => {
                  set.title = event.target.value;
                }}
              />
              <TextField
                label="Reps"
                value={set.reps}
                type="number"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  // set.reps = event.currentTarget.value;
                }}
              />

              {set.exercises &&
                set.exercises.length > 0 &&
                set.exercises.map((exercise) => <Box>Exercise</Box>)}
            </Box>
          ))} */}

        <Box display="flex" alignSelf="flex-end">
          <IconButton
            onClick={() => {
              workout.sets.push({ ...initialSet });
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
