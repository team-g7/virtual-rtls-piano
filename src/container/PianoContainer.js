import React from "react";
import MQTTConnection from '../config/MQTTConnection';
import '../css/PianoContainer.css';
import Konva from 'konva';
import {Circle, Layer, Stage} from "react-konva";

//The mapped coordinates
let xpos = 0;
let ypos = 0;

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
                xpos = coords.x-4700;
                ypos = coords.y-6140;
                console.log("Mapped coords:", xpos, ypos);
            }
        }, 500);
    }

    render() {
        return (
          <div>
              <PosCircle xval={xpos} yval={ypos}/>
          </div>
        );
    }
}

export default PianoContainer;