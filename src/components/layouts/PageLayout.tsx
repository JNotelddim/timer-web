import React, { ReactNode, Children } from "react";
import { Box } from "@material-ui/core";
import TopBar, { TopBarProps } from "./TopBar";

type PageProps = {
  children: ReactNode;
  topBarProps?: TopBarProps;
};

const PageLayout = ({ children, topBarProps }: PageProps) => {
  return (
    <>
      <TopBar {...topBarProps} />
      <Box padding={6}>{children}</Box>
    </>
  );
};

export default PageLayout;
