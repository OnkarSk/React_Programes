import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/home">Main page</Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router> 
      <footer> Hello I'm a little footer</footer>
    </Fragment>
  );
}

export default App;
