export class ChatClient {
    observers = []; // There should only be one of these
    connected = false;

    constructor() {
        // Adjust the webSocket protocol to what is being used for HTTP
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

        // Display that we have opened the webSocket
        this.socket.onopen = (event) => {
            // this.notifyObservers('system', 'websocket', 'connected');
            this.connected = true;
        };

        // Display messages we receive from our friends
        this.socket.onmessage = async (event) => {
            const text = await event.data.text();
            const chat = JSON.parse(text);
            this.notifyObservers(chat.message, chat.sender);
        };

        // If the webSocket is closed then disable the interface
        this.socket.onclose = (event) => {
            // this.notifyObservers('system', 'websocket', 'disconnected');
            this.connected = false;
        };
    }

    // Send a message over the webSocket
    sendMessage(message, sender, role) {
        this.notifyObservers(message, sender);
        this.socket.send(JSON.stringify({ message, sender, role }));
    }

    // This should only be called once
    addObserver(observer) {
        this.observers.push(observer);
    }

    // This should only ever notify one
    notifyObservers(message, sender) {
        this.observers.forEach((h) => h({ message, sender }));
    }
}