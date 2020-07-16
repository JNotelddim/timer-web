import React from "react";
import { TextField } from "@material-ui/core";

import { InputField } from "src/types";

const TextFieldInput = ({ input: { value, onChange }, label }: InputField) => (
  <TextField label={label} fullWidth value={value} onChange={onChange} />
);

export default TextFieldInput;
