import React, {Component} from "react";
import Tangent from "../components/Tangent";

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
    }

    render() {
        return (
          <div>
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
              <Tangent note="C" xstart="14525" xend="15190" ystart={this.state.yStartPos} yend={this.state.yEndPos} sound=""sound_url/>
          </div>
        );
    }

}

export default PianoContainer;