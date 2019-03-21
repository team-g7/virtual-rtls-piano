import React from "react";
import MQTTConnection from '../config/MQTTConnection';
import '../css/PianoContainer.css';
import PianoWrapper from "../components/PianoWrapper";
import Konva from 'konva';
import { Stage, Layer } from 'react-konva';
import PosCircle from '../components/PosCircle';

class PianoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            xPos: 0,
            yPos: 0,
            xStartPos: 5200,
            xEndPos: 15200,
            yStartPos: 1040,
            yEndPos: 6440
        };
    }

    componentDidMount() {
        let connection = new MQTTConnection();
        let tag = "3249431515";
        connection.connect();
        setInterval(() => {
            if (connection.isConnected) {
                let coords = connection.getCoordsFromTag(tag);
                let normalizedAcceleration = connection.getNormalizedAccelerationFromTag(tag);
                console.log("Normalized acceleration: ", normalizedAcceleration);
                console.log("Coords", coords);
                this.setState({
                    xPos: ((coords.x - 5600) * window.innerWidth) / 10000,
                    yPos: ((-(coords.y - 5100)) * window.innerHeight) / 5000
                });
                console.log("mapped coords", this.state.xPos, this.state.yPos);
            }
        }, 300);
    }

    render() {
        return (
            <div className="piano-container">
                {/* Adding piano */}
                <PianoWrapper firstNote={'c3'} lastNote={'c5'}/>
                {/* Setting stage for react konva */}
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <PosCircle xPos={this.state.xPos} yPos={this.state.yPos}/>
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default PianoContainer;