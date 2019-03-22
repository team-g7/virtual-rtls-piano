import React from "react";
import {Circle} from "react-konva";

class PosCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: 10,
            fill: 'green'
        };
    }

    render() {
        return (
          <Circle x={this.props.xPos} y={this.props.yPos}
                  radius={this.state.radius} fill={this.state.fill}/>
        );
    }
}

export default PosCircle;