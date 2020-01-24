import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Box, NDSProvider, NavBar, theme} from "@nulogy/components";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Custom } from "./pages/Custom";

const App = () => {
  const primaryMenu = [
    { name: 'Home',  render:  () => <Link to="/">Home</Link>},
    { name: 'Details',  render:  () => <Link to="/details">Details</Link>},
    { name: 'Custom',  render:  () => <Link to="/custom">Custom</Link>},
  ];
  
  const secondaryMenu = [
    {
      name: 'Settings',
      items: [
        { name: 'Permissions', href: '/' },
        { name: 'Manage account', href: '/' },
      ],
    },
  ];
  
  const search = {
    onSubmit: () => {},
  };
  
  return (
    <Router>
      <NDSProvider theme={theme}>
        <NavBar menuData={ { primaryMenu, secondaryMenu, search } } />
        <Box p="x6">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/details">
              <Details/>
            </Route>
            <Route path="/custom">
              <Custom/>
            </Route>
          </Switch>
        </Box>
      </NDSProvider>
    </Router>
  );
}

export default App;