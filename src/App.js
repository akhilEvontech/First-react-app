import React, { Component } from "react";

import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
