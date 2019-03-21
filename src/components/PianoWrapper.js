// Parts of cude used from https://codesandbox.io/s/7wq15pm1n1

import React from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from './SoundfontProvider';
import '../css/Piano.css';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

class PianoWrapper extends React.Component {

    constructor(props) {
        super(props);

    }

    handleSubmit() {

    }

    render() {
        return (
            <SoundfontProvider
                instrumentName="acoustic_grand_piano"
                audioContext={audioContext}
                hostname={soundfontHostname}
                render={({ isLoading, playNote, stopNote }) => (
                    <Piano
                        noteRange={{first: MidiNumbers.fromNote(this.props.firstNote), last: MidiNumbers.fromNote(this.props.lastNote)}}
                        width={105}
                        keyWidthToHeight={0.15}
                        playNote={playNote}
                        stopNote={stopNote}
                        disabled={isLoading}
                    />
                )}
            />
        );
    }
}

export default PianoWrapper;