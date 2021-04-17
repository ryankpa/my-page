import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';
import myIcon from './assets/icon.png';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav className="bg-yellow-400 p-8 shadow-xl  overflow-y-auto">
          <img className="rounded-full min-w-xs border-2 border-white p-2 mb-6" src={myIcon} alt="A drawing of myself that I made"></img>
            <div className="text-2xl font-medium tracking-wide font-sans pb-6">
              Ryan Atienza
            </div>
            <ul id="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/about">
          <About />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
