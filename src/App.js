import './App.css';
import React from 'react';
import { PrettyHeader } from './PrettyHeader'
import { About } from './About'

class App extends React.Component {
  render(){
    return (
      <div className="App bg-white min-h-screen">
        <PrettyHeader />
        <About />
      </div>
    );
  }
}

export default App;
