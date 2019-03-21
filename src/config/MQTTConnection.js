import React from 'react';

class MQTTConnection extends React.Component {
    lastMessage = {}; // Set by the message event
    isConnected = false;

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
                if (!error) {
                    console.log("Connected to MQTT!");
                    this.isConnected = true;
                }
            })
        });

        this.client.on('reconnect', () => console.info('Reconnecting...'));
        this.client.on('message', (topic, msg) =>  {
            var resp = JSON.parse(msg.toString());
            if (resp[0]['success'] === true) {
                this.lastMessage = resp;
            }
        });
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

    getCoordsFromTag(tagId) {
        var tag = (this.getDataFromTag(tagId) != null) ? this.getDataFromTag(tagId) : {};
        if (typeof tag.data !== "undefined") {
            var xCoord = (typeof tag.data.coordinates.x !== "undefined") ? tag.data.coordinates.x : 0;
            var yCoord = (typeof tag.data.coordinates.y !== "undefined") ? tag.data.coordinates.y : 0;
            return {
                x: xCoord,
                y: yCoord,
            }
        }
    }
}

export default MQTTConnection;
