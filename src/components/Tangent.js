import React from 'react';
import { Rect } from 'react-konva';
import '../css/Tangent.css';

class Tangent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            height: 711.117,
            width: 106.667,
            fill: "white",
            stroke: "black",
            style: 'style="border: 1px solid black"'
        };
    }

    render() {
        return (
          <Rect fill={this.state.fill} stroke={this.state.stroke}
                x={this.props.xStart} xend={this.props.xEnd}
                width={this.state.width} height={this.state.height}/>
        );
    }
}

export default Tangent;