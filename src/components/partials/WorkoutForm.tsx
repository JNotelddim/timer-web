import React, { useState } from "react";
import { Box, TextField, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { INewSet, INewWorkout, INewExercise } from "src/types";

const initialSet: INewSet = {
  title: "",
  reps: 0,
  exercises: [],
};

const initialExercise: INewExercise = {
  reps: 0,
  duration: 60,
};

const WorkoutForm = () => {
  const [newWorkout, setNewWorkout] = useState<INewWorkout>({
    title: "",
    sets: [],
  });
  const { sets } = newWorkout;
  // const [sets, setSets] = useState<INewSet[]>();

  //one workout, starts w/ no sets
  // has "add set" btn,
  // ^ creates new set w/ no exercises : {title, exercises, reps }
  // has "add exercise" btn
  // ^ creates new exercise: {title, description, reps, duration}

  const handleAddSet = () => {
    setNewWorkout({
      ...newWorkout,
      sets: [...newWorkout.sets, { ...initialSet }],
    });
  };

  const handleAddExercise = (set: INewSet) => {
    setNewWorkout({
      ...newWorkout,
      sets: [
        ...newWorkout.sets.filter((set) => set !== set),
        {
          ...set,
          exercises: [...set.exercises, { ...initialExercise }],
        },
      ],
    });
  };

  console.log(newWorkout);

  return (
    <form>
      <Box display="flex" flexDirection="column" maxWidth={600}>
        <TextField
          label="Workout Title"
          fullWidth
          required
          value={newWorkout?.title}
        />

        {sets &&
          sets.length &&
          sets.map((set) => (
            <Box bgcolor="cyan">
              <TextField label="Set Title" value={set.title} />
              <TextField label="Reps" value={set.reps} type="number" />

              {set.exercises &&
                set.exercises.length &&
                set.exercises.map((exercise) => <Box>Exercise</Box>)}
            </Box>
          ))}

        <IconButton onClick={handleAddSet}>
          <Add />
        </IconButton>
      </Box>
    </form>
  );
};

export default WorkoutForm;
