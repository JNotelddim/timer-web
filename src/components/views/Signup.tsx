import React, { MouseEvent } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import AuthForm from "src/components/partials/AuthForm";
import { signup } from "src/actions/user";

const Signup = () => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleSignup = (event: MouseEvent, email: string, password: string) => {
    dispatch(signup(email, password));
    // history.push("/");

    return {}; // TODO: figure out what the return value is actually expected for and use it properly
  };

  return <AuthForm type="Signup" formAction={handleSignup} />;
};

export default Signup;
