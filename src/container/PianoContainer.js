import React from "react";
import MQTTConnection from '../config/MQTTConnection';
import '../css/PianoContainer.css';
import Konva from 'konva';
import {Circle, Layer, Stage} from "react-konva";

class PianoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            xStartPos: 5200,
            xEndPos: 15200,
            yStartPos: 1040,
            yEndPos: 6440
        };
    }

    componentDidMount() {
        let connection = new MQTTConnection();
        let tag = "3249431515";
        let coords = {};
        connection.connect();
        setInterval(() => {
            if (connection.isConnected) {
                coords = connection.getCoordsFromTag(tag);
                console.log("Coords", coords);
            }
        }, 2000);
        let x = coords.x;
        let y = coords.y;
        console.log("X Position: " + x);
        console.log("Y Position: " + y);
    }

    render() {
        return (
          <div>
              <Stage width={window.innerWidth} height={window.innerHeight}>
                  <Layer>
                      <Circle
                          x={0}
                          y={0}
                          radius={15}
                          fill="#70ee00"
                          shadowBlur={5}
                      />
                  </Layer>
              </Stage>
          </div>
        );
    }
}

export default PianoContainer;