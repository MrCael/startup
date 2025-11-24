export class ChatManager {
    chats = [];
    connected = false;

    constructor() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

        // Display that we have opened the webSocket
        this.socket.onopen = (event) => {
            // this.notifyObservers('system', 'websocket', 'connected');
            this.connected = true;
        };

        // Display messages we receive from users
        this.socket.onmessage = async (event) => {
            const text = await event.data.text();
            const chat = JSON.parse(text);
            this.notifyObservers('received', chat.name, chat.msg);
        };

        // If the webSocket is closed then disable the interface
        this.socket.onclose = (event) => {
            // this.notifyObservers('system', 'websocket', 'disconnected');
            this.connected = false;
        };
    }

    sendMessage() {
        // send a message to a single user
    }

    addChat() {
        // recieve a new request to chat
    }

    updateChats() {
        // update chats when messages are recieved
    }
}