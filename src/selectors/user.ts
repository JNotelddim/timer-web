import { State } from "src/types";

export const getUser = (state: State) => state.user;

export const getError = (state: State) => state.error;

export const getIsAuthenticated = (state: State) => state.isAuthenticated;
