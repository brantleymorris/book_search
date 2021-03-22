import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import componenets here

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/saved/:id" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
