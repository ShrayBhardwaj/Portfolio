import React from 'react';
import './App.css';
import About from "./About";
import Contact from './Contact';
import Menu from './Menu';
import Header from './Header';
import Intro from "./Intro";

import {Route, Switch} from 'react-router-dom';
 
const App = () => {
 
  return (
    <div>
     <Header />
     <Menu />  
    <Switch>
      <Route  exact path ="/About" component={About} />
      <Route  exact path ="/Contact" component={Contact} />
      <Route  exact path ="/Intro" component={Intro} />
      
    </Switch>

    </div>
  );
};

export default App;
