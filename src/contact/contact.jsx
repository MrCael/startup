import React from "react";

export function Contact() {
    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <div>
                    <table>
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
                                <button className="btn btn-secondary">Submit</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="d-flex flex-column justify-content-center align-div">
                    <table>
                        <tr>
                            <td>Live Chat <span className="note">This is my WebKit placeholder</span></td>
                        </tr>
                        <tr>
                            <td className="centered">
                                <input type="text" className="form-control" /> <button className="btn btn-secondary">Send</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    );
}