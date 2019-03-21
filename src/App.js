import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import {Stage, Layer} from "react-konva";
import Konva from 'konva';
import Tangent from "./components/Tangent";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Tangent xstart={0} xend={100} ystart={5} yend={500} note={"C"}/>
              <Tangent xstart={100} xend={200} ystart={5} yend={500} note={"D"}/>
              <Tangent xstart={200} xend={300} ystart={5} yend={500} note={"E"}/>
              <Tangent xstart={300} xend={400} ystart={5} yend={500} note={"F"}/>
              <Tangent xstart={400} xend={500} ystart={5} yend={500} note={"G"}/>
              <Tangent xstart={500} xend={600} ystart={5} yend={500} note={"A"}/>
              <Tangent xstart={600} xend={700} ystart={5} yend={500} note={"H"}/>
              <Tangent xstart={700} xend={800} ystart={5} yend={500} note={"C"}/>
              <Tangent xstart={800} xend={900} ystart={5} yend={500} note={"D"}/>
              <Tangent xstart={900} xend={1000} ystart={5} yend={500} note={"E"}/>
              <Tangent xstart={1000} xend={1100} ystart={5} yend={500} note={"F"}/>
              <Tangent xstart={1100} xend={1200} ystart={5} yend={500} note={"G"}/>
              <Tangent xstart={1200} xend={1300} ystart={5} yend={500} note={"A"}/>
              <Tangent xstart={1300} xend={1400} ystart={5} yend={500} note={"H"}/>
              <Tangent xstart={1400} xend={1500} ystart={5} yend={500} note={"C"}/>
            </Layer>
          </Stage>
      </div>
    );
  }
}

export default App;
