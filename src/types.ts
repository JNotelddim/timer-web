import { ChangeEvent } from "react";

// Workouts -- Hierarchy: Workout > Set[] > Exercise[]
export type Exercise = {
  id: string;
  order: number;
  title?: string;
  description?: string;
  reps: number;
  duration: number;
};

export type Set = {
  id: string;
  order: number;
  title: string;
  reps: number;
  exercises: Exercise[];
};

export type Workout = {
  id: string;
  title: string;
  content: string;
};

// General Forms
export type InputField = {
  label: string;
  input: {
    value: any;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
};

// Workout Form ~ new workout creation types -- less strict
export interface INewExercise {
  order?: number;
  title?: string;
  description?: string;
  reps: number;
  duration: number;
}

export interface INewSet {
  title?: string;
  reps?: number;
  exercises: INewExercise[];
}

export interface INewWorkout {
  title: string;
  sets: INewSet[];
}

// User
export type User = {
  email: string;
  workouts: Array<Workout>;
};

// Other
export type Action = {
  type: string;
  payload: any;
};

// Reducer States
export type UserState = {
  user?: User;
  error?: string;
  isAuthenticated: boolean;
};

export type WorkoutState = {
  workouts: Workout[];
};
