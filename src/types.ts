export type Workout = {
  title: string;
  content: string;
};

export type User = {
  email: string;
  workouts: Array<Workout>;
};

export type State = {
  user?: User;
  cookie?: string;
};

export type Action = {
  type: string;
  payload: any;
};
