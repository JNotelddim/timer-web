import React, { ChangeEvent, SetStateAction } from "react";
import { Field } from "redux-form";
import { Box, IconButton } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { INewSet, INewExercise } from "src/types";
import TextFieldInput from "./TextFieldInput";
import { getId } from "../helperFns";

const initialExercise: INewExercise = {
  id: getId(),
  reps: 6,
  duration: 60,
};

type SetProps = {
  set: INewSet;
  updateWorkoutSet: (set: INewSet) => void;
};

const WorkoutSet = ({ set, updateWorkoutSet }: SetProps) => {
  const addExercise = () => {
    updateWorkoutSet({
      ...set,
      exercises: [...set.exercises, { ...initialExercise, id: getId() }],
    });
  };

  const updateExercise = (exercise: INewExercise) => {
    updateWorkoutSet({
      ...set,
      exercises: [
        ...set.exercises.filter((e) => e.id !== exercise.id),
        exercise,
      ],
    });
  };

  console.log(set);
  console.log(set.exercises);

  return (
    <Box
      boxShadow={2}
      borderRadius={8}
      marginY={3}
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

      {set.exercises &&
        set.exercises.length > 0 &&
        set.exercises.map((exercise: INewExercise) => (
          <Box
            key={exercise.id}
            margin={1}
            marginTop={3}
            borderRadius={12}
            padding={4}
            bgcolor="lightgrey"
          >
            <Field
              label="Reps"
              name={`set-${set.id}-exercise-${exercise.id}-reps`}
              value={exercise.reps}
              type="number"
              component={TextFieldInput}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const numericalValue: number = Number.parseInt(
                  event.currentTarget.value
                );
                updateExercise({ ...exercise, reps: numericalValue });
              }}
            />
            <Field
              label="Duration (s)"
              name={`set-${set.id}-exercise-${exercise.id}-duration`}
              value={exercise.duration}
              type="number"
              component={TextFieldInput}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const numericalValue: number = Number.parseInt(
                  event.currentTarget.value
                );
                updateExercise({ ...exercise, duration: numericalValue });
              }}
            />
          </Box>
        ))}

      <Box display="flex" alignSelf="flex-end" my={4}>
        <IconButton
          onClick={() => {
            updateWorkoutSet({
              ...set,
              exercises: [
                ...set.exercises,
                { ...initialExercise, id: getId() },
              ],
            });
          }}
        >
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
};

export default WorkoutSet;
