import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import {Box, NDSProvider, NavBar, theme} from "@nulogy/components";
import {primaryMenu, secondaryMenu, search} from "./data/menuData.js";
import { Pages } from "./pages/index";

const App = () => {
  return (
    <Router>
      <NDSProvider theme={theme}>
        <NavBar menuData={{ primaryMenu, secondaryMenu, search }} />
        <Box p="x6">
          <Pages />
        </Box>
      </NDSProvider>
    </Router>
  );
};

export default App;
