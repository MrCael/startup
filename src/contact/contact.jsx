import React from "react";

import { useEffect, useRef } from "react";
import { ChatClient } from "../chatClient";

function ChatBody({ chatHistory }) {
    return (
        <div className="message-area d-flex flex-column" id="message-area">
            {chatHistory.map((message) => (
                <div className={`message ${message.role}`}>
                    {message.text}
                </div>
            ))}
        </div>
    );
}

// This component could possibly be consolidated with the admin version
function LiveChat({ webSocket }) {
    const [chatHistory, setChatHistory] = React.useState([]);

    function updateChat() {
        const message = document.getElementById("message-input").value;
        if (message !== "") {
            webSocket.sendMessage(message);
            document.getElementById("message-input").value = "";
        }
    }

    // Define callback function to be used any time a message is sent or received
    useEffect(() => {
        webSocket.addObserver((newMessage) => {
            setChatHistory(chatHistory => [...chatHistory, newMessage]);
        });
    }, []);

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
        <div className="chat-container d-flex flex-column">
            <div className="chat-header">
                Live Chat
            </div>
            {chatHistory.length > 0 && <ChatBody chatHistory={chatHistory} />}
            <div className="input-container">
                <input type="text" id="message-input" />
                <button className="btn btn-secondary" onClick={updateChat}>Send</button> {/* The onClick attribute on this line might be broken */}
            </div>
        </div>
    );
}

export function Contact({ userName }) {
    const [confirmingContact, setConfirmingContact] = React.useState(false);

    function confirmContact() {
        new Promise(() => {
            setConfirmingContact(true);
            Array.from(document.getElementsByTagName("input")).forEach(input => {
                input.value = "";
            });

            Array.from(document.getElementsByTagName("textarea")).forEach(input => {
                input.value = "";
            });
            
            setTimeout(() => {
                setConfirmingContact(false);
            }, 2000);
        });
    }

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <div>
                    <table>
                        <tbody>
                            {confirmingContact && <tr>
                                <td colSpan="2" className="centered">
                                    <p style={{ color: "#3CB371" }}>Message sent!</p>
                                </td>
                            </tr>}
                            <tr>
                                <td width="50%">
                                    First name
                                    <input type="text" className="form-control" />
                                </td>
                                <td width="50%">
                                    Last Name
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    Email Address
                                    <input type="email" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    Phone Number
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    Message
                                    <textarea className="form-control"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="centered">
                                    <button className="btn btn-secondary" onClick={() => confirmContact()}>Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <LiveChat webSocket={new ChatClient(userName, "user")} />
            </div>
        </main>
    );
}