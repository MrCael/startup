import React from "react";
import { useEffect } from "react";

function ChatBody({ chatHistory }) {
    return (
        <div className="message-area d-flex flex-column" id="message-area">
            {chatHistory.map((message) => (
                <div className={`message ${message.sender}`}>
                    {message.message}
                </div>
            ))}
        </div>
    );
}

function LiveChat() {
    const [chatHistory, setChatHistory] = React.useState([]);

    async function updateChat() {
        let messageInput = document.getElementById("message-input");
        if (messageInput.value !== "") {
            const newMessage = {sender: "user", message: messageInput.value}
            const newHistory = [...chatHistory, newMessage]

            messageInput.value = "";
            setChatHistory(newHistory);

            await new Promise(
                setTimeout(() => {
                    setChatHistory([...newHistory, {sender: "admin", message: "Sorry, we are not available to chat right now."}]);
                }, 1000)
            );
        }
    }

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
                User Name
            </div>
            {chatHistory.length > 0 && <ChatBody chatHistory={chatHistory} />}
            <div className="input-container">
                <input type="text" id="message-input" />
                <button className="btn btn-secondary" onClick={() => updateChat()}>Send</button>
            </div>
        </div>
    );
}

export function ChatManager() {
    return (
        <div className="d-flex flex-column justify-content-center align-div" style={{ flex: "1" }}>
            <div style={{ margin: "10px" }}>
                <LiveChat />
            </div>
            <div style={{ margin: "10px" }}>
                <LiveChat />
            </div>
            <div style={{ margin: "10px" }}>
                <LiveChat />
            </div>
        </div>
    );
}