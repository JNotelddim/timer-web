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
  const { isPrivate = false, children } = props;
  const history = useHistory();
  const isAuthenticated = useSelector(getIsAuthenticated);

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
