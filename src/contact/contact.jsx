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

    function updateChat() {
        let messageInput = document.getElementById("message-input");
        if (messageInput.value !== "") {
            const newMessage = {sender: "user", message: messageInput.value}
            const newHistory = [...chatHistory, newMessage]

            messageInput.value = "";
            setChatHistory(newHistory);

            setTimeout(() => {
                setChatHistory([...newHistory, {sender: "admin", message: "Sorry, we are not available to chat right now."}]);
            }, 1000);
        }
    }

    useEffect(() => {
        if (chatHistory.length > 0) {
            setTimeout(() => {
                document.getElementById("message-area").scrollTop = document.getElementById("message-area").scrollHeight;
            }, 0);
        }
    }, [chatHistory])
    
    return (
        <div className="chat-container d-flex flex-column">
            <div className="chat-header">
                Live Chat
            </div>
            {chatHistory.length > 0 && <ChatBody chatHistory={chatHistory} />}
            <div className="input-container">
                <input type="text" id="message-input" />
                <button className="btn btn-secondary" onClick={() => updateChat()}>Send</button>
            </div>
        </div>
    );
}

export function Contact() {
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
                <LiveChat />
            </div>
        </main>
    );
}