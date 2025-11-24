const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  // Create a websocket object
  const socketServer = new WebSocketServer({ server: httpServer });

  socketServer.on('connection', (socket, req) => {
    socket.isAlive = true;
    socket.user = req.query.user;
    socket.role = req.query.role;

    // Forward messages to everyone except the sender
    socket.on('message', function message(data) {
        // Find some kind of way to find if the socket user is the admin user
        if (data.role == "admin") {
            // code
        } else {
            socketServer.clients.find(client => client.role === "admin").send(data);
        }
    //   socketServer.clients.forEach((client) => {
    //     if (client !== socket && client.readyState === WebSocket.OPEN) {
    //       client.send(data);
    //     }
    //   });
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
