import React from "react";

import { useEffect, useMemo } from "react";
import { ChatManager } from "./chatManager";

function ChatBody({ chatHistory }) {
    return (
        <div className="message-area d-flex flex-column" id="message-area">
            {chatHistory.map(message => (
                <div className={`message ${message.role}`}>
                    {message.text}
                </div>
            ))}
        </div>
    );
}

function LiveChat({ webSocket, chatClient, firstMessage }) {
    const [chatHistory, setChatHistory] = React.useState([]);

    async function updateChat() {
        const message = document.getElementById(`message-input-${chatClient.userName}`).value;
        if (message !== "") {
            webSocket.sendMessage(message, chatClient.userName);
            document.getElementById(`message-input-${chatClient.userName}`).value = "";
        }
    }

    // Define callback function to be used any time a message is sent or received
    useEffect(() => {
        chatClient.addObserver((newMessage) => {
            setChatHistory(chatHistory => [...chatHistory, newMessage]);
        });
    }, []);

    useEffect(() => {
        if (firstMessage !== "") {
            setChatHistory(chatHistory => [...chatHistory, { text: firstMessage, role: "receiver" }]);
        }
    }, [firstMessage]);

    // Keep chat scrolled to the bottom after each message
    useEffect(() => {
        if (chatHistory.length > 0) {
            const messageArea = document.getElementById("message-area");
            setTimeout(() => {
                messageArea.scrollTop = messageArea.scrollHeight;
            }, 0);
        }
    }, [chatHistory]);
    
    return (
        <div className="chat-container-admin d-flex flex-column">
            <div className="chat-header">
                {chatClient.userName}
            </div>
            {chatHistory.length > 0 && <ChatBody chatHistory={chatHistory} />}
            <div className="input-container">
                <input type="text" id={`message-input-${chatClient.userName}`} />
                <button className="btn btn-secondary" onClick={updateChat}>Send</button>
            </div>
        </div>
    );
}

export function ChatList({ userName }) {
    const [chats, setChats] = React.useState([]);
    const [mostRecentFirstMessage, setMostRecentFirstMessage] = React.useState("");
    const webSocket = useMemo(() => new ChatManager(userName, setChats, setMostRecentFirstMessage), []);

    return (
        <div className="d-flex flex-column justify-content-center align-div" style={{ flex: "1" }}>
            {chats.length == 0 && <h1>There are no current chat requests</h1>}
            {chats.length > 0 && chats.map((chat) => (
                <div style={{ margin: "10px" }}>
                    <LiveChat webSocket={webSocket} chatClient={chat} firstMessage={chat.userName == mostRecentFirstMessage.from ? mostRecentFirstMessage.text : ""} />
                </div>
            ))}
        </div>
    );
}