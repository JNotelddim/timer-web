import React, { ReactNode } from "react";
import { Box } from "@material-ui/core";

export type TopBarProps = {
  title?: string;
  button?: ReactNode;
};

const TopBar = ({ title, button }: TopBarProps) => {
  return (
    <Box
      display="flex"
      flex={1}
      justifyContent="space-between"
      padding={3}
      borderBottom={1}
      fontSize={24}
      alignItems="center"
    >
      {title || "Timer App"}
      {button}
    </Box>
  );
};

export default TopBar;
