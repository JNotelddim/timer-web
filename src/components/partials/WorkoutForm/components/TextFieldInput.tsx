import React from "react";
import { TextField } from "@material-ui/core";

import { InputField } from "src/types";

const TextFieldInput = ({
  input: { value, onChange },
  label,
  type,
}: InputField) => {
  console.log("Input Value", value);
  return (
    <TextField
      label={label}
      fullWidth
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default TextFieldInput;
