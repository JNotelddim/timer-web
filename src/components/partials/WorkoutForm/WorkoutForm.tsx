import React, { ChangeEvent, useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Box, TextField, IconButton, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { INewSet, INewWorkout, INewExercise } from "src/types";
import TextFieldInput from "src/components/partials/WorkoutForm/components/TextFieldInput";
import WorkoutSet from "./components/WorkoutSet";

let inc = 1;
const getId = () => (inc++).toString();

const initialExercise: INewExercise = {
  id: getId(),
  reps: 6,
  duration: 60,
};

const initialSet: INewSet = {
  id: getId(),
  title: "",
  reps: 2,
  exercises: [{ ...initialExercise }],
};

const initialWorkout: INewWorkout = {
  title: "",
  sets: [],
};

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

  // const setWorkoutSets = (updatedSets: Array<INewSet>) => {
  //   setWorkout({ ...workout, sets: updatedSets });
  // };

  const addWorkoutSet = (set: INewSet) => {
    setWorkout({
      ...workout,
      sets: [...workout.sets, { ...initialSet, id: getId() }],
    });
  };

  const updateWorkoutSet = (set: INewSet) => {
    const updatedSets = [...workout.sets.filter((s) => s.id !== set.id), set];
    console.log(
      `Sets len, before: ${workout.sets.length}, after: ${workout.sets.length}`
    );
    setWorkout({
      ...workout,
      // sets: [...workout.sets.filter((s) => s.id !== set.id), set],
      sets: updatedSets,
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
              addWorkoutSet={addWorkoutSet}
              updateWorkoutSet={updateWorkoutSet}
            />
          ))}

        <Box display="flex" alignSelf="flex-end" my={4}>
          <IconButton
            onClick={() => {
              setWorkout({
                ...workout,
                sets: [...workout.sets, { ...initialSet, id: getId() }],
              });
            }}
          >
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

export default reduxForm({ form: "workout" })(WorkoutForm);
