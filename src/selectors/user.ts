import { UserState } from "src/types";

export const getUser = (state: UserState) => state.user;

export const getError = (state: UserState) => state.error;

export const getIsAuthenticated = (state: UserState) => state.isAuthenticated;
