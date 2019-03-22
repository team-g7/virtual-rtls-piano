import React from "react";
import MQTTConnection from '../config/MQTTConnection';
import '../css/PianoContainer.css';
import '../css/PosCircle.css'
import PianoWrapper from "../components/PianoWrapper";
import { Stage, Layer } from 'react-konva';
import PosCircle from '../components/PosCircle';
import Tangent from '../components/Tangent';

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
                if (normalizedAcceleration > 2000) {
                    try {
                        document.elementFromPoint(this.state.xPos, this.state.yPos).click();
                    } catch (npe) {
                        console.log("Go to the VR lab. You are currently out of range.");
                    }
                }
                //console.log("Normalized acceleration: ", normalizedAcceleration);
                //console.log("Coords", coords);
                this.setState({
                    xPos: ((coords.x - 5600) * window.innerWidth) / 10000,
                    yPos: ((-(coords.y - 5100)) * window.innerHeight) / 5000
                });
                //console.log("mapped coords", this.state.xPos, this.state.yPos);
            }
        }, 350);
    }

    render() {
        return (
            <div className="piano-container">
                {/* Adding piano */}
                <PianoWrapper firstNote={'c3'} lastNote={'c5'}/>
                {/* Setting stage for react konva */}
                <Stage width={window.innerWidth} height={window.innerHeight} className={"PosCircle"}>
                    <Layer>
                        <Tangent xStart={0} xEnd={106.667} note={"C"}/>
                        <Tangent xStart={106.667} xEnd={213.334} note={"D"}/>
                        <Tangent xStart={213.334} xEnd={320.001} note={"E"}/>
                        <Tangent xStart={320.001} xEnd={426.668} note={"F"}/>
                        <Tangent xStart={426.668} xEnd={533.335} note={"G"}/>
                        <Tangent xStart={533.335} xEnd={640.002} note={"A"}/>
                        <Tangent xStart={640.002} xEnd={746.669} note={"H"}/>
                        <Tangent xStart={746.669} xEnd={853.336} note={"C"}/>
                        <Tangent xStart={853.336} xEnd={960.003} note={"D"}/>
                        <Tangent xStart={960.003} xEnd={1066.67} note={"E"}/>
                        <Tangent xStart={1066.67} xEnd={1173.337} note={"F"}/>
                        <Tangent xStart={1173.337} xEnd={1280.004} note={"G"}/>
                        <Tangent xStart={1280.004} xEnd={1386.671} note={"A"}/>
                        <Tangent xStart={1386.671} xEnd={1493.338} note={"H"}/>
                        <Tangent xStart={1493.338} xEnd={1600.005} note={"C"}/>
                    </Layer>
                    <Layer>
                        <PosCircle xPos={this.state.xPos} yPos={this.state.yPos}/>
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default PianoContainer;