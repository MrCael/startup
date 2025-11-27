const { WebSocketServer } = require('ws');
const { parse } = require('url');

function peerProxy(httpServer) {
    // Create a websocket object
    const socketServer = new WebSocketServer({ server: httpServer, path: "/ws" });

    socketServer.on('connection', (socket, req) => {
        const { query } = parse(req.url, true)

        socket.isAlive = true;
        socket.userName = query.userName;
        socket.role = query.role;

        // Forward messages to everyone except the sender
        socket.on('message', function message(raw) {
            let data;
            try {
                data = JSON.parse(raw);
            } catch (e) {
                console.error("Invalid JSON from client:", raw.toString());
                return;
            }

            if (data.role == "admin") {
                // Find intended recipient and send them only relevant data
                [...socketServer.clients].find(client => client.userName == data.to && client.readyState === WebSocket.OPEN).send(JSON.stringify({ text: data.text, role: data.role}));
            } else {
                // Send data to admin user (only accounts for a single admin user online at a time)
                [...socketServer.clients].find(client => client.role == "admin" && client.readyState === WebSocket.OPEN).send(raw);
            }
        });

        // Respond to pong messages by marking the connection alive
        socket.on('pong', () => {
            socket.isAlive = true;
        });
    });

    // Periodically send out a ping message to make sure clients are alive
    setInterval(() => {
        socketServer.clients.forEach(function each(client) {
            if (client.isAlive === false) return client.terminate();

            client.isAlive = false;
            client.ping();
        });
    }, 10000);
}

module.exports = { peerProxy };
