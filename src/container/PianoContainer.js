import React from "react";
import Tangent from "../components/Tangent";
import '../css/PianoContainer.css';

class PianoContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            xStartPos: 5200,
            xEndPos: 15200,
            yStartPos: 1040,
            yEndPos: 6440
        }
    }

    componentDidMount() {
        // TODO Create some sort of coordinate/grid system

        // Connect to server
        const mqtt = require('mqtt');

        const HOST = 'wss://mqtt.cloud.pozyxlabs.com';
        const PORT = '443';
        const TOPIC = '5bd0948cbc0fb66be9d64bba';

        const client = mqtt.connect(`${HOST}:${PORT}`, {
            username: "5bd0948cbc0fb66be9d64bba",
            password: "ac1c289f-de25-468c-a87a-26b516e6c9dd",
            keepalive: 5, // Default is 60 seconds
            reconnectPeriod: 1000, // The client will automatically reconnect. This options defines the time between reconnects.
        });
        client.subscribe(TOPIC);

        client.on('connect', () => {
            console.info('Connected to local MQTT server!');
        });

        client.on('reconnect', () => {
            console.info('Reconnecting...');
        });

        client.on('message', (topic, message) => {
            //console.info(message.toString());
            let toJson = JSON.parse(message.toString());
            console.log(toJson);
            // To get a JavaScript object, use JSON.parse(message.toString())
        });
    }

    render() {
        return (
          <div>
              <canvas id="visualization-canvas" width="1200" height="600">
                <div className="lab-background">

                </div>
              </canvas>

              <Tangent note="C" xstart="5200" xend="5866" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="D" xstart="5866" xend="6532" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="E" xstart="6532" xend="7198" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="F" xstart="7198" xend="7198" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="G" xstart="7864" xend="8530" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="A" xstart="8530" xend="9196" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="H" xstart="9196" xend="9862" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="C" xstart="9862" xend="10528" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="D" xstart="10528" xend="11194" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="E" xstart="11194" xend="11860" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="F" xstart="11860" xend="12526" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="G" xstart="12526" xend="13192" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="A" xstart="13192" xend="13858" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="H" xstart="13858" xend="14525" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
              <Tangent note="C" xstart="14525" xend="15190" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound="sound_url"/>
          </div>
        );
    }
}

export default PianoContainer;