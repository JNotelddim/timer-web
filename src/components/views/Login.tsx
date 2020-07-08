import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import AuthForm from "src/components/partials/AuthForm";
import PageLayout from "src/components/layouts/PageLayout";
import { login } from "src/actions/user";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (
    event: MouseEvent,
    email: string,
    password: string
  ) => {
    await dispatch(login(email, password));

    return {}; // TODO: figure out what the return value is actually expected for and use it properly
  };

  const signupLink = <Link to="/signup">Signup</Link>;

  return (
    <PageLayout topBarProps={{ button: signupLink }}>
      <AuthForm type="Login" formAction={handleLogin} />
    </PageLayout>
  );
};

export default Login;
