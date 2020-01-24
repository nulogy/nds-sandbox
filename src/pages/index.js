import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./Home";
import { Details } from "./Details";
import { Custom } from "./Custom";
import { TemplateFile } from "./TemplateFile";
import { ANewOne } from "./ANewOne";
import { OkLetsDoIt } from "./OkLetsDoIt";
/* Import routes here */
import { Dashboard } from "./Dashboard";

export const Pages = () => {
    return (
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/details">
          <Details/>
        </Route>
        <Route path="/custom"><Custom/></Route>
        {/* Add routes here */}
<Route path="/dashboard"><Dashboard/></Route>
<Route path="/a_new_one"><ANewOne/></Route>
<Route path="/ok_cool"><OkLetsDoIt/></Route>
        </Switch>
    )
}