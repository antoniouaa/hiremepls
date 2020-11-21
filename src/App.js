import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";

import "./App.css";

import Sidebar from "./Components/Sidebar";
import Homepage from "./Components/Body/Homepage";
import Contact from "./Components/Body/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="App Wrapper">
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
