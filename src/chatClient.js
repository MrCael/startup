export class ChatClient {
    observers = []; // There should only be one of these
    connected = false;

    constructor(userName, connect = true) {
        this.userName = userName;

        // Adjust the webSocket protocol to what is being used for HTTP
        if (connect) {
            const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
            this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?userName=${this.userName}&status=user`);

            // Display that we have opened the webSocket
            this.socket.onopen = () => {
                this.connected = true;
            };

            // Display messages we receive from our friends
            this.socket.onmessage = async (event) => {
                const text = await event.data.text();
                const message = JSON.parse(text);
                this.notifyObservers(message.text, "receiver");
            };

            // If the webSocket is closed then disable the interface
            this.socket.onclose = () => {
                this.connected = false;
            };
        }
    }

    // Send a message over the webSocket
    sendMessage(text) {
        this.notifyObservers(text, "sender");
        this.socket.send(JSON.stringify({ text, from: this.userName, status: "user" }));
    }

    // This should only be called once
    addObserver(observer) {
        this.observers.push(observer);
    }

    // This should only ever notify one
    notifyObservers(text, role) {
        this.observers.forEach((callback) => callback({ text, role }));
    }
}