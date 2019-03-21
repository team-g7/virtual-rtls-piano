import React from 'react';

class MQTTConnection extends React.Component {
    lastMessage = {}; // Set by the message event

    connect() {
        var url = 'wss://mqtt.cloud.pozyxlabs.com:443';
        var mqtt = require('mqtt');

        this.client = mqtt.connect(url, {
            username: '5bd0948cbc0fb66be9d64bba',
            password: 'ac1c289f-de25-468c-a87a-26b516e6c9dd',
            keepalive: 5,
            reconnectPeriod: 10000
        });

        this.client.on('connect', () => {
            this.client.subscribe('5bd0948cbc0fb66be9d64bba', (error) => {
                if (!error) console.log("Connected to MQTT!");
            })
        });

        this.client.on('reconnect', () => console.info('Reconnecting...'));
        this.client.on('message', (topic, msg) => this.lastMessage = JSON.parse(msg.toString()));
    }

    getDataFromTag(tagId) {
        var tagData = "";

        this.lastMessage.forEach((element) => {
            if (element.tagId === tagId) {
                tagData = element;
            }
        });

        return tagData;
    }
}

export default MQTTConnection;
