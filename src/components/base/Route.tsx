import React, { ReactNode } from "react";
import { Route, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "src/selectors/user";

type RouteParams = {
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
  children: ReactNode;
};

const CustomRoute = (params: RouteParams) => {
  const { isPrivate = false, children } = params;
  const history = useHistory();
  const isAuthenticated = useSelector(getIsAuthenticated);

  console.log(`Route ${params.path} -- isAuthenticated: ${isAuthenticated}`);

  if (isPrivate && !isAuthenticated) {
    //redirect to login
    history.push("/login");
  }

  if (!isPrivate && isAuthenticated) {
    //redirect to Home
    history.push("/");
  }

  return <Route {...params}> {children}</Route>;
};

export default CustomRoute;
