import React from "react";
import MQTTConnection from '../config/MQTTConnection';
import '../css/PianoContainer.css';
import '../css/PosCircle.css'
import PianoWrapper from "../components/PianoWrapper";
import { Stage, Layer } from 'react-konva';
import PosCircle from '../components/PosCircle';
import Tangent from '../components/Tangent';
import Sound from 'react-sound';

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
        this.findSound = this.findSound.bind(this);
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
                        // document.elementFromPoint(this.state.xPos, this.state.yPos).click();
                        this.findSound(this.state.xPos, this.state.yPos);
                    } catch (npe) {
                        console.log("Go to the VR lab. You are currently out of range.");
                    }
                }
                console.log("Normalized acceleration: ", normalizedAcceleration);
                //console.log("Coords", coords);
                this.setState({
                    xPos: ((coords.x - 5600) * window.innerWidth) / 10000,
                    yPos: ((-(coords.y - 5100)) * window.innerHeight) / 5000
                });
                //console.log("mapped coords", this.state.xPos, this.state.yPos);
            }
        }, 350);
    }

    findSound(circleX, circleY) {
        // Checks if y position is in accepted range
        if (circleY > 0 && circleY < 711.118) {
            // Tangent 1
            if ((circleX > 0 && circleX < 106.667)) {
                console.log("Tangent 1 PRESSED!");
                new Audio('../audio/C3.mp3').play();
            } // Tangent 2
            else if ((circleX > 106.667 && circleX < 213.334)) {
                console.log("Tangent 2 PRESSED!");
            } // Tangent 3
            else if ((circleX > 213.334 && circleX < 320.001)) {
                console.log("Tangent 3 PRESSED!");
            } // Tangent 4
            else if ((circleX > 320.001 && circleX < 426.668)) {
                console.log("Tangent 4 PRESSED!");
            } // Tangent 5
            else if ((circleX > 426.668 && circleX < 533.335)) {
                console.log("Tangent 5 PRESSED!");
            } // Tangent 6
            else if ((circleX > 533.335 && circleX < 640.002)) {
                console.log("Tangent 6 PRESSED!");
            } // Tangent 7
            else if ((circleX > 640.002 && circleX < 746.669)) {
                console.log("Tangent 7 PRESSED!");
            } // Tangent 8
            else if ((circleX > 746.669 && circleX < 853.336)) {
                console.log("Tangent 8 PRESSED!");
            } // Tangent 9
            else if ((circleX > 853.336 && circleX < 960.003)) {
                console.log("Tangent 9 PRESSED!");
            } // Tangent 10
            else if ((circleX > 960.003 && circleX < 1066.67)) {
                console.log("Tangent 10 PRESSED!");
            } // Tangent 11
            else if ((circleX > 1066.67 && circleX < 1173.337)) {
                console.log("Tangent 11 PRESSED!");
            } // Tangent 12
            else if ((circleX > 1173.337 && circleX < 1280.004)) {
                console.log("Tangent 12 PRESSED!");
            } // Tangent 13
            else if ((circleX > 1280.004 && circleX < 1386.671)) {
                console.log("Tangent 13 PRESSED!");
            } // Tangent 14
            else if ((circleX > 1386.671 && circleX < 1493.338)) {
                console.log("Tangent 14 PRESSED!");
            } // Tangent 15
            else if ((circleX > 1493.338 && circleX < 1600.005)) {
                console.log("Tangent 15 PRESSED!");
            }
        }
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