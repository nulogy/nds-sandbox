import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Custom } from "./pages/Custom";

const App = () => {
  return (
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
          <Route path="/about">
            <Details/>
          </Route>
          <Route path="/dashboard">
            <Custom/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;