export type Workout = {
  id: string;
  title: string;
  content: string;
};

export type User = {
  email: string;
  workouts: Array<Workout>;
};

export type Action = {
  type: string;
  payload: any;
};

export type UserState = {
  user?: User;
  error?: string;
  isAuthenticated: boolean;
};

export type WorkoutState = {
  workouts: Workout[];
};
