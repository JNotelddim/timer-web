import { WorkoutState } from "src/types";

export const getWorkouts = (state: WorkoutState) => state.workouts;

export const getCurrentWorkout = (state: WorkoutState) => state.currentWorkout;
