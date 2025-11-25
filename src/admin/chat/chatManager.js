import { ChatClient } from "../../chatClient";

export class ChatManager {
    chats = []; // This variable sores a list of ChatClient objects, each having a 'from' and a 'role' without a 'socket' attribute
    connected = false;

    constructor(userName, setChats) {
        this.userName = userName;
        this.role = "admin";
        this.setReactChats = setChats;

        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws?role=${this.role}&userName=${this.userName}`);

        // Display that we have opened the webSocket
        this.socket.onopen = () => {
            this.connected = true;
        };

        // Display messages we receive from users
        this.socket.onmessage = async (event) => {
            const text = await event.data.text();
            const message = JSON.parse(text);
            
            if (!this.chats.find(chat => chat.userName == message.from)) {
                const newChat = new ChatClient(message.from, this.role, false);
                this.chats.push(newChat);
                this.setReactChats([...this.chats]);
            }

            // I wonder if I'll get an error at this point because the React component hasn't rerendered with the updated chat list

            this.updateChat(message.text, message.from, message.role);
        };

        // If the webSocket is closed then disable the interface
        this.socket.onclose = () => {
            this.connected = false;
        };
    }

    // Send a message to a single user
    sendMessage(text, chatName) {
        this.updateChat(text, chatName, this.role);
        this.socket.send(JSON.stringify({ text, to: chatName, role: this.role }));
    }

    // update chats when messages are recieved
    updateChat(text, chatName, role) {
        this.chats.find(chat => chat.userName == chatName).notifyObservers({ text, role });
    }
}