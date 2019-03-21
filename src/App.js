import React, { Component } from 'react';
import './css/App.css';
import PianoWrapper from "./components/PianoWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoWrapper firstNote={'c3'} lastNote={'c5'}/>
      </div>
    );
  }
}

export default App;
