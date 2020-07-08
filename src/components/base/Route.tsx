import React, { ReactNode } from "react";
import { Route, useHistory } from "react-router";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "src/selectors/user";

type RouteProps = {
  path: string;
  exact?: boolean;
  isPrivate?: boolean;
  children: ReactNode;
};

const CustomRoute = (props: RouteProps) => {
  const { isPrivate = false, children, path } = props;
  const history = useHistory();
  const isAuthenticated = useSelector(getIsAuthenticated);

  console.log(`Route ${path} -- isAuthenticated: ${isAuthenticated}`);

  if (isPrivate && !isAuthenticated) {
    //redirect to login
    history.push("/login");
  }

  if (!isPrivate && isAuthenticated) {
    //redirect to Home
    history.push("/");
  }

  return <Route {...props}> {children}</Route>;
};

export default CustomRoute;
