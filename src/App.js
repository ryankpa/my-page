import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './About';
import Home from './Home';
import Sidebar from './Sidebar'

class App extends React.Component {
  render(){
    return (
      <div className="App text-justify lg:text-left lg:grid lg:grid-col-1 lg:grid-row-1">
        <div className="lg:grid lg:grid-cols-6 overflow-hidden">
          <div className="page lg:col-span-5">
            <Switch>
              <Route exact path="/">
              <Home />
              </Route>
              <Route path="/about">
              <About />
              </Route>
            </Switch>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
