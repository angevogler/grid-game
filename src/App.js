import React, { Component } from 'react';
import './styles/style.css';

import ControlPanel from './components/ControlPanel';
import GridDisplay from './components/GridDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Cabbin</h1>
        </header>

        <main>
          <div className="grid-container">
            <div className="row">
              <GridDisplay xCoord={1} yCoord={5}/>
              <GridDisplay xCoord={2} yCoord={5}/>
              <GridDisplay xCoord={3} yCoord={5}/>
              <GridDisplay xCoord={4} yCoord={5}/>
              <GridDisplay xCoord={5} yCoord={5}/>
            </div>
            <div className="row">
              <GridDisplay xCoord={1} yCoord={4}/>
              <GridDisplay xCoord={2} yCoord={4}/>
              <GridDisplay xCoord={3} yCoord={4}/>
              <GridDisplay xCoord={4} yCoord={4}/>
              <GridDisplay xCoord={5} yCoord={4}/>
            </div>
            <div className="row">
              <GridDisplay xCoord={1} yCoord={3}/>
              <GridDisplay xCoord={2} yCoord={3}/>
              <GridDisplay xCoord={3} yCoord={3}/>
              <GridDisplay xCoord={4} yCoord={3}/>
              <GridDisplay xCoord={5} yCoord={3}/>
            </div>
            <div className="row">
              <GridDisplay xCoord={1} yCoord={2}/>
              <GridDisplay xCoord={2} yCoord={2}/>
              <GridDisplay xCoord={3} yCoord={2}/>
              <GridDisplay xCoord={4} yCoord={2}/>
              <GridDisplay xCoord={5} yCoord={2}/>
            </div>
            <div className="row">
              <GridDisplay xCoord={1} yCoord={1}/>
              <GridDisplay xCoord={2} yCoord={1}/>
              <GridDisplay xCoord={3} yCoord={1}/>
              <GridDisplay xCoord={4} yCoord={1}/>
              <GridDisplay xCoord={5} yCoord={1}/>
            </div>
          </div>
          <ControlPanel />
        </main>
      </div>
    );
  }
}

export default App;
