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
            fill: "red",
            style: 'style="border: 1px solid black"'
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate() {
        //TODO Use method to run sound file
    }

    render() {
        return (
          <Rect className="border-shit" note={this.props.note} sound="" fill={this.state.fill}
                x={this.props.xStart} xend={this.props.xEnd}
                width={this.state.width} height={this.state.height}/>
        );
    }
}

export default Tangent;