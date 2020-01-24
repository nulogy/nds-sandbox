import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {NDSProvider, theme} from "@nulogy/components";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Custom } from "./pages/Custom";

const App = () => {
  return (
    <NDSProvider theme={theme}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
          <li>
            <Link to="/custom">Custom</Link>
          </li>
        </ul>

        <hr />
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
      </div>
    </Router>
    </NDSProvider>
  );
}

export default App;