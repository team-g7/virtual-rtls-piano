import React from "react";
import MQTTConnection from '../config/MQTTConnection';
import '../css/PianoContainer.css';
import '../css/PosCircle.css'
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
                        this.findSound(this.state.xPos, this.state.yPos);
                    } catch (npe) {
                        console.log("Go to the VR lab. You are currently out of range.");
                    }
                }
                //console.log("Normalized acceleration: ", normalizedAcceleration);
                this.setState({
                    xPos: ((coords.x - 5600) * window.innerWidth) / 10000,
                    yPos: ((-(coords.y - 5100)) * window.innerHeight) / 5000
                });
                //console.log("mapped coords", this.state.xPos, this.state.yPos);
            }
        }, 60);
    }

    findSound(circleX, circleY) {
        // Checks if y position is in accepted range
        if (circleY > 0 && circleY < 711.118) {
            // Tangent 1
            if ((circleX > 0 && circleX < 106.667)) {
                console.log("Tangent 1 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/C3.mp3').play();
            } // Tangent 2
            else if ((circleX > 106.667 && circleX < 213.334)) {
                console.log("Tangent 2 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/D3.mp3').play();
            } // Tangent 3
            else if ((circleX > 213.334 && circleX < 320.001)) {
                console.log("Tangent 3 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/E3.mp3').play();
            } // Tangent 4
            else if ((circleX > 320.001 && circleX < 426.668)) {
                console.log("Tangent 4 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/F3.mp3').play();
            } // Tangent 5
            else if ((circleX > 426.668 && circleX < 533.335)) {
                console.log("Tangent 5 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/G3.mp3').play();
            } // Tangent 6
            else if ((circleX > 533.335 && circleX < 640.002)) {
                console.log("Tangent 6 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/A3.mp3').play();
            } // Tangent 7
            else if ((circleX > 640.002 && circleX < 746.669)) {
                console.log("Tangent 7 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/B3.mp3').play();
            } // Tangent 8
            else if ((circleX > 746.669 && circleX < 853.336)) {
                console.log("Tangent 8 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/C4.mp3').play();
            } // Tangent 9
            else if ((circleX > 853.336 && circleX < 960.003)) {
                console.log("Tangent 9 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/D4.mp3').play();
            } // Tangent 10
            else if ((circleX > 960.003 && circleX < 1066.67)) {
                console.log("Tangent 10 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/E4.mp3').play();
            } // Tangent 11
            else if ((circleX > 1066.67 && circleX < 1173.337)) {
                console.log("Tangent 11 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/F4.mp3').play();
            } // Tangent 12
            else if ((circleX > 1173.337 && circleX < 1280.004)) {
                console.log("Tangent 12 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/G4.mp3').play();
            } // Tangent 13
            else if ((circleX > 1280.004 && circleX < 1386.671)) {
                console.log("Tangent 13 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/A4.mp3').play();
            } // Tangent 14
            else if ((circleX > 1386.671 && circleX < 1493.338)) {
                console.log("Tangent 14 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/B4.mp3').play();
            } // Tangent 15
            else if ((circleX > 1493.338 && circleX < 1600.005)) {
                console.log("Tangent 15 PRESSED!");
                new Audio('https://raw.githubusercontent.com/fuhton/piano-mp3/master/piano-mp3/C5.mp3').play();
            }
        }
    }

    render() {
        return (
            <div className="piano-container">
                {/* Setting stage for react konva */}
                <Stage width={window.innerWidth} height={window.innerHeight} className={"PosCircle"}>
                    <Layer>
                        {/* Adding tangent components to the stage */}
                        <Tangent xStart={0} xEnd={106.667}/>
                        <Tangent xStart={106.667} xEnd={213.334}/>
                        <Tangent xStart={213.334} xEnd={320.001}/>
                        <Tangent xStart={320.001} xEnd={426.668}/>
                        <Tangent xStart={426.668} xEnd={533.335}/>
                        <Tangent xStart={533.335} xEnd={640.002}/>
                        <Tangent xStart={640.002} xEnd={746.669}/>
                        <Tangent xStart={746.669} xEnd={853.336}/>
                        <Tangent xStart={853.336} xEnd={960.003}/>
                        <Tangent xStart={960.003} xEnd={1066.67}/>
                        <Tangent xStart={1066.67} xEnd={1173.337}/>
                        <Tangent xStart={1173.337} xEnd={1280.004}/>
                        <Tangent xStart={1280.004} xEnd={1386.671}/>
                        <Tangent xStart={1386.671} xEnd={1493.338}/>
                        <Tangent xStart={1493.338} xEnd={1600.005}/>
                    </Layer>
                    <Layer>
                        {/* Display position of "player" */}
                        <PosCircle xPos={this.state.xPos} yPos={this.state.yPos}/>
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default PianoContainer;