export class ChatManager {
    chats = [];
    connected = false;

    constructor(userName) {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?role=admin&userName=${userName}`);

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

    sendMessage(message, sender, role) {
        // send a message to a single user
        this.notifyObservers(message, sender);
        this.socket.send(JSON.stringify({ message, sender, role }));
    }

    addChat() {
        // recieve a new request to chat
    }

    updateChats() {
        // update chats when messages are recieved
    }
}