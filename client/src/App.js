import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { StateProvider } from "./utils/GlobalState";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <StateProvider>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
         </StateProvider> 
      </div>
    </Router>
  );
};

export default App;
