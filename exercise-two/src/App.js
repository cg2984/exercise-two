import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
//Styles
import './App.css';
//Components
import Header from "./components/header.js"
import Home from './containers/home.js'
function App() {
  return (
    <div className="SiteWrapper">
      <Header/>
      <Router>
      	<Switch>
      		<Route path="/">
      		<Home/>
      		</Route>
      	</Switch>
      </Router>
    </div>
  );
}

export default App;
