import React, { MouseEvent, useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getError } from "src/selectors/user";

type AuthFormProps = {
  type: "Login" | "Signup";
  formAction: (event: MouseEvent, email: string, password: string) => {};
};

const AuthForm = ({ type, formAction }: AuthFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const error = useSelector(getError);

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
          autoComplete="email"
          fullWidth
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />

        <TextField
          label="Password"
          type="password"
          autoComplete={type === "Login" ? "current password" : "new password"}
          fullWidth
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error !== undefined && error.length && (
          <Box fontSize={10} color="red" marginTop={4}>
            {error}
          </Box>
        )}

        <Box margin={6} display="flex" width="100%" justifyContent="flex-end">
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
