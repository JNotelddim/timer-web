import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import AuthForm from "src/components/partials/AuthForm";
import { login } from "src/actions/user";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (event: MouseEvent, email: string, password: string) => {
    dispatch(login(email, password));
    history.push("/");

    return {}; // TODO: figure out what the return value is actually expected for and use it properly
  };

  return <AuthForm type="Login" formAction={handleLogin} />;
};

export default Login;
