import React from 'react';

export function Profile() {
    return (
        <main>
            <div class="d-flex flex-row profile-div" style="margin: 10px;">
                <div class="profile-box align-div">
                    <button class="btn btn-secondary">Edit Profile</button>
                    <span class="note">This is a database placeholder</span>
                    <table class="table">
                        <tr>
                            <td colspan="2">
                                <h1>Personal Information</h1>
                            </td>
                        </tr>
                        <tr>
                            <td class="d-flex flex-row">
                                <p style="height: fit-content; margin-top: auto; margin-bottom: auto; margin-right: 10px;">Profile Image: </p>
                                <img src="cael.jpg" alt="Profile Image" class="img-fluid img-thumbnail profile-pic" />
                                <button class="btn btn-secondary" style="height: fit-content; margin-top: auto; margin-bottom: auto;">Edit Profile Image</button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Username: cerickson</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Password: ******** <button class="btn btn-secondary">Show Password</button></p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Name: Cael Erickson</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Email: cael.erickson@gmail.com</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Phone Number:(801) 205-7320</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <label>
                                    <input type="checkbox" value="1" />
                                    <span>Opt in to recieve notifications</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button class="btn btn-secondary profile-button">View Measurements</button>
                                <button class="btn btn-secondary profile-button">Edit Measurements</button>
                                <span class="note">These are React placeholders</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="profile-box align-div">
                    <button class="btn btn-secondary">Edit Shippign Information</button>
                    <span class="note">This is a database placeholder</span>
                    <table class="table">
                        <tr>
                            <td colspan="2">
                                <h1>Shipping Information</h1>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Name: Cael Erickson</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Address Line 1: 603 N 100 W</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Address Line 2: Apt 8</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>City: Provo</p>
                            </td>
                            <td>
                                <p>State: UT</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Zip Code: 84601</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <h1>Billing Information</h1>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Card Number: **** **** **** 1234 <button class="btn btn-secondary">Show Card Number</button></p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p>Name on Card: Cael Erickson</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button class="btn btn-secondary profile-button">Add New Payment Method</button>
                                <button class="btn btn-secondary profile-button">View Purchase History</button>
                                <span class="note">These are React placeholders</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    );
}