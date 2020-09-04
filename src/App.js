import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper";
import "./App.css";


class App extends Component {

  render() {

  return (
    <Router>
      <div>
        <Header/>
      </div>
      <div>
        <Wrapper>
            <Route exact path="/" component = { Home } />
            <Route exact path="/About" component = { About } />
            <Route exact path="/Portfolio" component = { Portfolio } />
            <Route exact path="/Contact" component = { Contact } />
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
}

export default App;