import logo from './logo.ico';
import {  useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css";
import './App.css';
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from './components/Navbar'
import Minis from './components/Minis'
import Thoughts from './components/Thoughts'
import CodinProjects from './components/CodinProjects'
import Whoami from './components/Whoami'
import Home from './components/Home'
import Canva from './components/Canva'
import anime from './components/canvaAnimations'
import SingleImg from './components/SingleImg'
import SingleProject from './components/SingleProject'
require('./motion-ui.css')

const customHistory = createBrowserHistory();


const App = () => {

  const ExpandedContent = ()=>{
    let { Id } = useParams()
    return ( Id.length < 3 ? <SingleProject id={Id}  /> : <SingleImg id={Id} /> )
  }

  useEffect(() => {
    M.AutoInit()
   }, [])

  return (
    <div className="App">
      <Canva draw={anime} />
      <Router history={customHistory}>
        <Navbar />
        <div className="contentBlock">
          <Home />
          <Whoami/>
          <CodinProjects/>
          <Minis/>
          <Thoughts/>
        </div>
        <Switch>
            <Route  path={`/cv/:Id`} >
               <ExpandedContent />
            </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
