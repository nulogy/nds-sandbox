import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Box, NDSProvider, BrandedNavBar, theme } from "@nulogy/components";
import { primaryMenu, secondaryMenu, search } from "./data/menuData.js";
import { Pages } from "./pages/index";

const App = () => {
  return (
    <Router>
      <NDSProvider theme={theme}>
        <BrandedNavBar menuData={{ primaryMenu, secondaryMenu, search }} />
        <Box>
          <Pages />
        </Box>
      </NDSProvider>
    </Router>
  );
};

export default App;
