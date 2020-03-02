import React from 'react';
//Styles
import './App.css';
//Components
import Header from "./components/header.js"
import Home from './containers/home.js'
function App() {
  return (
    <div className="SiteWrapper">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
