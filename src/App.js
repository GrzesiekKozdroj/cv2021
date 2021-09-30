import logo from './logo.ico';
import { useState, useEffect, Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Minis from './components/Minis'
import Thoughts from './components/Thoughts'
import CodinProjects from './components/CodinProjects'
import Whoami from './components/Whoami'
import Home from './components/Home'
import pack from './components/vars'
require('./motion-ui.css')

const App = () => {
  useEffect(() => {
    M.AutoInit()
   }, [])
  return (
    <div className="App">
      <Router>
          <nav>
            <div className="nav-wrapper #4caf50 green darken-4">
              <Link to="/" exact className="brand-logo">Lego</Link>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/whoami/" >about me</Link></li>
                <li><Link to="/codin_projects/" >coding projects</Link></li>
                <li><Link to="/minis/" >miniature gallery</Link></li>
                <li><Link to="/thoughts/" >thoughts</Link></li>
              </ul>
            </div>
          </nav>

          <ul class="sidenav" id="mobile-demo"  >
            <li><Link to="/whoami/" >about me</Link></li>
            <li><Link to="/codin_projects/" >coding projects</Link></li>
            <li><Link to="/minis/" >miniature gallery</Link></li>
            <li><Link to="/thoughts/" >thoughts</Link></li>
          </ul>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/whoami" component={Whoami} />
            <Route path="/codin_projects"  component={CodinProjects} />
            <Route path="/minis"  component={Minis} />
            <Route path="/thoughts" component={Thoughts} />
          </Switch>
      </Router>
    </div>
  )
}

export default App;
