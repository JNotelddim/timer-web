import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import AuthForm from "src/components/partials/AuthForm";
import PageLayout from "src/components/layouts/PageLayout";
import { signup } from "src/actions/user";

const Signup = () => {
  const dispatch = useDispatch();

  const handleSignup = (event: MouseEvent, email: string, password: string) => {
    dispatch(signup(email, password));

    return {}; // TODO: figure out what the return value is actually expected for and use it properly
  };

  const loginLink = <Link to="/login">Login</Link>;

  return (
    <PageLayout topBarProps={{ button: loginLink, showNav: false }}>
      <AuthForm type="Signup" formAction={handleSignup} />
    </PageLayout>
  );
};

export default Signup;
