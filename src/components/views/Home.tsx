import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { Workout } from "src/types";
import { logout } from "src/actions/user";
import { getWorkouts as getStateWorkouts } from "src/selectors/workout";
import { getWorkouts } from "src/actions/workout";
import PageLayout from "src/components/layouts/PageLayout";

function Home() {
  const workouts: Workout[] = useSelector(getStateWorkouts);
  const dispatch = useDispatch();

  console.log(workouts);

  useEffect(() => {
    console.log("Dispatch getWorkouts");
    dispatch(getWorkouts());
  }, []);

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
