import React, { ReactNode, MouseEvent } from "react";
import { Box, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export type TopBarProps = {
  title?: string;
  button?: ReactNode;
  toggleDrawer?: Function;
  showNav?: boolean;
};

const TopBar = ({
  title,
  button,
  toggleDrawer = () => console.log("Missing `toggleDrawer()` handler"),
  showNav = true,
}: TopBarProps) => {
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
      {showNav && (
        <IconButton onClick={(event: MouseEvent) => toggleDrawer()}>
          <MenuIcon />
        </IconButton>
      )}
      {title || "Timer App"}
      {button}
    </Box>
  );
};

export default TopBar;
