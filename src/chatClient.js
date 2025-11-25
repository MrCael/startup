export class ChatClient {
    observers = []; // There should only be one of these
    connected = false;

    constructor(userName, role, connect = true) {
        this.userName = userName;
        this.role = role;

        // Adjust the webSocket protocol to what is being used for HTTP
        if (connect) {
            const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
            this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?userName=${this.userName}&role=${this.role}`);

            // Display that we have opened the webSocket
            this.socket.onopen = () => {
                this.connected = true;
            };

            // Display messages we receive from our friends
            this.socket.onmessage = async (event) => {
                const text = await event.data.text();
                const message = JSON.parse(text);
                this.notifyObservers(message.text, message.role);
            };

            // If the webSocket is closed then disable the interface
            this.socket.onclose = () => {
                this.connected = false;
            };
        }
    }

    // Send a message over the webSocket
    sendMessage(text) {
        this.notifyObservers(text, this.role);
        if (connect) this.socket.send(JSON.stringify({ text, from: this.userName, role: this.role }));
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