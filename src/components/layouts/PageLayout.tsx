import React, { ReactNode, useState } from "react";
import { Box, Drawer, List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import TopBar, { TopBarProps } from "./TopBar";

type PageProps = {
  children: ReactNode;
  topBarProps: TopBarProps;
};

const PageLayout = ({ children, topBarProps }: PageProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navList = (
    <List>
      <ListItem>
        <Link to="/new-workout">New Workout</Link>
      </ListItem>
      <ListItem>
        <Link to="/account">Account</Link>
      </ListItem>
    </List>
  );

  return (
    <>
      <TopBar
        {...topBarProps}
        toggleDrawer={() => setDrawerOpen(!drawerOpen)}
      />
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {navList}
      </Drawer>
      <Box padding={6}>{children}</Box>
    </>
  );
};

export default PageLayout;
