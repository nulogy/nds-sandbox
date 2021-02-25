import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { NDSProvider, Box, BrandedNavBar, Button, theme, ApplicationFrame, Text } from "@nulogy/components";
import { primaryMenu, secondaryMenu, search } from "./data/menuData.js";
import { Pages } from "./pages/index";
import { MainProvider, useMainState, MAIN_ACTION_TYPES, useMainDispatch } from "./context/MainContext";

const AppNav = () => {
  const { user } = useMainState();
  const dispatch = useMainDispatch();
  const loggedInSection = {
    name: user,
    items: [
      {
        name: "log out",
        render: () => <Text onClick={() => dispatch({ type: MAIN_ACTION_TYPES.LOG_OUT })}>Log Out</Text>
      }
    ]
  };
  const loggedOutSection = {
    name: (
      <Button onClick={() => dispatch({ type: MAIN_ACTION_TYPES.LOG_IN, data: "newuser@nulogy.com" })}>Log in</Button>
    )
  };
  const userSection = user ? loggedInSection : loggedOutSection;
  return <BrandedNavBar menuData={{ primaryMenu, secondaryMenu: [...secondaryMenu, userSection, search] }} />;
};

const App = () => {
  return (
    <Router basename="/">
      <NDSProvider theme={theme}>
        <MainProvider>
          <ApplicationFrame backgroundColor="lightGrey" height="100vh" navBar={<AppNav />}>
            <Box p="x3" height="100%">
              <Box backgroundColor="white" borderRadius="medium">
                <Pages />
              </Box>
            </Box>
          </ApplicationFrame>
        </MainProvider>
      </NDSProvider>
    </Router>
  );
};

export default App;
