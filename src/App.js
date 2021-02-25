import React from 'react';
import './App.css';
import About from "./About";
import Contact from './Contact';
import Menu from './Menu';
import Header from './Header';

import {Route, Switch} from 'react-router-dom';
 
const App = () => {
 
  return (
    <div>
     <Menu />
     <Switch>
      <Route exact path = "/" component={Header} />
      <Route path= "/About" component ={About }/>
      <Route path="/contact" component={Contact} />
      </Switch>
      
    </div>
  );
};

export default App;
