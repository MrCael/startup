import { ChatClient } from "../../chatClient";

export class ChatManager {
    chats = []; // This variable sores a list of ChatClient objects, each having a 'from' attribute, but no 'socket' attribute
    connected = false;

    constructor(userName, setReactChats, setFirstMessage) {
        this.userName = userName;
        this.setReactChats = setReactChats;
        this.setFirstMessage = setFirstMessage

        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?userName=${this.userName}&status=admin`);

        // Display that we have opened the webSocket
        this.socket.onopen = () => {
            this.connected = true;
        };

        // Display messages we receive from users
        this.socket.onmessage = async (event) => {
            const text = await event.data.text();
            const message = JSON.parse(text);
            
            if (!this.chats.find(chat => chat.userName == message.from)) {
                const newChat = new ChatClient(message.from, false);
                this.chats.push(newChat);
                this.setReactChats([...this.chats]);
                this.setFirstMessage({ text: message.text, from: message.from });
            } else {
                this.updateChat(message.text, message.from, "receiver");
            }
        };

        // If the webSocket is closed then disable the interface
        this.socket.onclose = () => {
            this.connected = false;
        };
    }

    // Send a message to a single user
    sendMessage(text, chatName) {
        this.updateChat(text, chatName, "sender");
        this.socket.send(JSON.stringify({ text, to: chatName, status: "admin" }));
    }

    // update chats when messages are recieved
    updateChat(text, chatName, role) {
        this.chats.find(chat => chat.userName == chatName).notifyObservers(text, role);
    }
}