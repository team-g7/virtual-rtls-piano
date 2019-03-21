
const mqtt = require('mqtt');

const HOST = '192.168.100.237'; // Get from webapp documentation
const PORT = '1883';
const TOPIC = 'tags';

const client = mqtt.connect(`mqtt://${HOST}:${PORT}`, {
    keepalive: 5, // Default is 60 seconds
    reconnectPeriod: 1000, // The client will automatically reconnect. This options defines the time between reconnects.
});
client.subscribe(TOPIC);

client.on('connect', () => {
    console.info('Connected to local MQTT server!');
});

client.on('reconnect', () => {
    console.info('Reconnecting...');
});

client.on('message', (topic, message) => {
    console.info(message.toString());
    // To get a JavaScript object, use JSON.parse(message.toString())
});

export default mqtt