import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import NavMenu from './components/NavMenu';
import Projects from './components/Projects';
import Home from './components/Home';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </>
  );
}
