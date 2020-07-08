import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import PageLayout from "src/components/layouts/PageLayout";
import { logout } from "src/actions/user";

function Home() {
  const dispatch = useDispatch();

  const logoutBtn = (
    <Button onClick={() => dispatch(logout())}> Log out </Button>
  );

  return (
    <PageLayout topBarProps={{ button: logoutBtn }}>
      <div>Home!::</div>
    </PageLayout>
  );
}

export default Home;
