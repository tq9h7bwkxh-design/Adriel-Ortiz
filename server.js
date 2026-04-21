const express = require('express');
const WebSocket = require('ws');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket connections for multiplayer
wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.on('message', (message) => {
        console.log('Received: %s', message);
        // handle messages
    });
    ws.on('close', () => console.log('Client disconnected'));
});

// Starting server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
