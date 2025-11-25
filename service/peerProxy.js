const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
    // Create a websocket object
    const socketServer = new WebSocketServer({ server: httpServer });

    socketServer.on('connection', (socket, req) => {
        socket.isAlive = true;
        socket.userName = req.query.userName;
        socket.role = req.query.role;

        // Forward messages to everyone except the sender
        socket.on('message', function message(data) {
            if (data.role == "admin") {
                // Find intended recipient and send them only relevant data
                socketServer.clients.find(client => client.userName == data.to).send({ text: data.text, role: data.role});
            } else {
                // Send data to admin user (only accounts for a single admin user online at a time)
                socketServer.clients.find(client => client.role == "admin").send(data);
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
