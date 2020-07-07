import React, { MouseEvent, useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

type AuthFormProps = {
  type: "Login" | "Signup";
  formAction: (event: MouseEvent, email: string, password: string) => {};
};

const AuthForm = ({ type, formAction }: AuthFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const otherPage = {
    path: type === "Login" ? "/signup" : "/login",
    title: type === "Login" ? "Signup" : "Login",
  };

  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        marginTop={10}
        width="40%"
      >
        <Box margin={6} fontSize={24}>
          {type}
        </Box>

        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />

        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Box
          margin={6}
          display="flex"
          width="100%"
          justifyContent="space-between"
        >
          <Link to={otherPage.path}>Go to {otherPage.title}</Link>
          <Button
            title={type}
            onClick={(event) => formAction(event, email, password)}
          >
            {type}
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AuthForm;
