const { WebSocketServer } = require('ws');
const { parse } = require('url');

function peerProxy(httpServer) {
    // Create a websocket object
    const socketServer = new WebSocketServer({ server: httpServer, path: "/ws" });

    socketServer.on('connection', (socket, req) => {
        const { query } = parse(req.url, true)

        socket.isAlive = true;
        socket.userName = query.userName;
        socket.status = query.status;

        // Forward messages to everyone except the sender
        socket.on('message', function message(raw) {
            let data;
            try {
                data = JSON.parse(raw);
            } catch (e) {
                console.error("Invalid JSON from client:", raw.toString());
                return;
            }

            if (data.status == "admin") {
                // Find intended recipient (user, not admin) and send them only relevant data
                socketServer.clients.forEach((client) => {
                    if (client.userName == data.to && client.readyState === WebSocket.OPEN) {
                        client.send(raw);
                    }
                });
            } else {
                // Send data to admin (only accounts for a single admin user online at a time)
                socketServer.clients.forEach((client) => {
                    if (client.status == "admin" && client.readyState === WebSocket.OPEN) {
                        client.send(raw);
                    }
                });
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
