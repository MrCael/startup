import React from "react";

export function Contact({ contactConfirmed }) {
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
                <div className="d-flex flex-column justify-content-center align-div">
                    <table>
                        <tbody>
                            <tr>
                                <td>Live Chat <span className="note">This is my WebKit placeholder</span></td>
                            </tr>
                            <tr>
                                <td className="centered">
                                    <input type="text" className="form-control" /> <button className="btn btn-secondary">Send</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}