import React from "react";
import Konva from 'konva';
import {Circle, Layer, Stage} from "react-konva";

const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

const
    layer = new Konva.Layer();
stage.add(layer);

const
    circle = new Konva.Circle({
        x: 50,
        y: 50,
        width: 50,
        height: 100,
        fill: 'green',
        draggable: true
    });
layer.add(circle);

class PosCircle extends React.Component {

    constructor(props) {
        super(props);

    }

    handleSubmit() {

    }

    render() {

        return (
        layer.draw();
    )
    }
}