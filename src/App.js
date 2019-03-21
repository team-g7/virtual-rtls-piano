import React, { Component } from 'react';
import './css/App.css';
import PianoWrapper from "./components/PianoWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoWrapper firstNote={'c3'} lastNote={'c3'}/>
        <PianoWrapper firstNote={'d3'} lastNote={'d3'}/>
        <PianoWrapper firstNote={'e3'} lastNote={'e3'}/>
        <PianoWrapper firstNote={'f3'} lastNote={'f3'}/>
        <PianoWrapper firstNote={'g3'} lastNote={'g3'}/>
        <PianoWrapper firstNote={'a3'} lastNote={'a3'}/>
        <PianoWrapper firstNote={'b3'} lastNote={'b3'}/>
        <PianoWrapper firstNote={'c4'} lastNote={'c4'}/>
        <PianoWrapper firstNote={'d4'} lastNote={'d4'}/>
        <PianoWrapper firstNote={'e4'} lastNote={'e4'}/>
        <PianoWrapper firstNote={'f4'} lastNote={'f4'}/>
        <PianoWrapper firstNote={'g4'} lastNote={'g4'}/>
        <PianoWrapper firstNote={'a4'} lastNote={'a4'}/>
        <PianoWrapper firstNote={'b4'} lastNote={'b4'}/>
        <PianoWrapper firstNote={'c5'} lastNote={'c5'}/>
      </div>
    );
  }
}

export default App;
