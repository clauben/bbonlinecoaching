import React from "react";
import "./App.css";
import About from "./Components/pages/About.js";
import Home from "./Components/pages/HomePage/Home.js";
import Navbar from "./Components/pages/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
