import React from 'react';

export function Contact() {
    return (
        <main>
            <div class="d-flex flex-column justify-content-center align-div">
                <div>
                    <table>
                        <tr>
                            <td width="50%">
                                First name
                                <input type="text" class="form-control" />
                            </td>
                            <td width="50%">
                                Last Name
                                <input type="text" class="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Email Address
                                <input type="email" class="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Phone Number
                                <input type="text" class="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Message
                                <textarea class="form-control"></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center;">
                                <button class="btn btn-secondary">Submit</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="d-flex flex-column justify-content-center align-div">
                    <table>
                        <tr>
                            <td>Live Chat <span class="note">This is my WebKit placeholder</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <input type="text" class="form-control" /> <button class="btn btn-secondary">Send</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    );
}