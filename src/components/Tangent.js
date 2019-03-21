import React from 'react';
import Konva from 'konva';
import { Rect, Text, Circle, Line } from 'react-konva';
import '../css/Tangent.css';

/*

            DEPRICATED

*/
class Tangent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }

    handleSubmit() {

    }

    render() {
        return (
              <Rect
                  x={this.props.xstart}
                  y={this.props.ystart}
                  name={this.props.note}
                  width={(this.props.xend - this.props.xstart)}
                  height={(this.props.yend - this.props.ystart)}
                  fill={"#F8F8F844"}
                  stroke={"black"}
                  strokeWidth={0.2}
              />
        );
    }
}

export default Tangent;