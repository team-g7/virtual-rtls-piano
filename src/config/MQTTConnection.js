import React from 'react';

class MQTTConnection extends React.Component {
    isConnected = false;
    lastMessage = {}; // Set by the message event
    lastCoords = {
        x: 0,
        y: 0
    };

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

            // Checks if data is ok
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
        var coords = this.lastCoords;
        var tag = this.getDataFromTag(tagId);

        // If any sub lists are undefined, default back to the last coordinates used
        if (typeof tag.data !== "undefined") {
            if (typeof tag.data.coordinates !== "undefined") {
                coords.x = tag.data.coordinates.x;
                coords.y = tag.data.coordinates.y;

                this.lastCoords = coords;
            }
        }

        return coords;
    }
}

export default MQTTConnection;
