import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import { Workout } from "src/types";
import { logout } from "src/actions/user";
import { getWorkouts as getStateWorkouts } from "src/selectors/workout";
import { getWorkouts } from "src/actions/workout";
import PageLayout from "src/components/layouts/PageLayout";

function Home() {
  const workouts: Workout[] = useSelector(getStateWorkouts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, []);

  const logoutBtn = (
    <Button onClick={() => dispatch(logout())}> Log out </Button>
  );

  return (
    <PageLayout topBarProps={{ button: logoutBtn }}>
      <Box>
        <h3>Workouts: </h3>
        {workouts && workouts.map((w) => <span>w</span>)}
      </Box>
    </PageLayout>
  );
}

export default Home;
