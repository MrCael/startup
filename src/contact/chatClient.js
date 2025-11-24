export class ChatClient {
    observers = []; // There should only be one of these
    connected = false;

    constructor(userName) {
        // Adjust the webSocket protocol to what is being used for HTTP
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?role=user&userName=${userName}`);

        // Display that we have opened the webSocket
        this.socket.onopen = () => {
            this.connected = true;
        };

        // Display messages we receive from our friends
        this.socket.onmessage = async (event) => {
            const text = await event.data.text();
            const chat = JSON.parse(text);
            this.notifyObservers(chat.message, chat.role);
        };

        // If the webSocket is closed then disable the interface
        this.socket.onclose = () => {
            this.connected = false;
        };
    }

    // Send a message over the webSocket
    sendMessage(message, from, role) {
        this.notifyObservers(message, role);
        this.socket.send(JSON.stringify({ message, from, role }));
    }

    // This should only be called once
    addObserver(observer) {
        this.observers.push(observer);
    }

    // This should only ever notify one
    notifyObservers(message, role) {
        this.observers.forEach((h) => h({ message, role }));
    }
}