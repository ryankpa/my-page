import './App.css';
import React from 'react';
import { PrettyHeader } from './PrettyHeader'
import { About } from './About'
import { Nav } from './Nav'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <PrettyHeader />
        <About />
      </div>
    );
  }
}

export default App;
