import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export function Profile({ setFrom }) {
    const [user, setUser] = React.useState(null);
    const passwordTrue = "password123";
    const passwordStar = "***********";
    const [password, setPassword] = React.useState(passwordStar);
    const [passwordButtonText, setPasswordButtonText] = React.useState("Show Password");
    const [passwordShown, setPasswordShown] = React.useState(false);

    const cardNumTrue = "1234 5678 9000 0000";
    const cardNumStar = "**** **** **** 0000";
    const [cardNum, setCardNum] = React.useState(cardNumStar);
    const [cardNumButtonText, setCardNumButtonText] = React.useState("Show Card Number");
    const [cardNumShown, setCardNumShown] = React.useState(false);

    function toggleField(shown, setField, valueTrue, valueStar, setText, fieldName, setShown) {
        if (!shown) {
            setField(valueTrue)
            setText(`Hide ${fieldName}`);
            setShown(true);
        } else {
            setField(valueStar);
            setText(`Show ${fieldName}`);
            setShown(false);
        }
    }

    function pathConfig() {
        setFrom("profile")
    }

    useEffect(() => {
        async function getUser() {
            const response = await fetch("/api/user/profile", {
                credentials: "include"
            });

            const body = await response.json();
            setUser(body.user);
        }

        getUser();
    }, []);

    return (
        <main>
            <div className="d-flex flex-row profile-div" style={{margin: "10px"}}>
                <div className="profile-box align-div">
                    <NavLink className="btn btn-secondary" onClick={() => pathConfig()} to="/personalInfo">Edit Profile</NavLink>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <h1>Personal Information</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className="d-flex flex-row">
                                    <p className="profile-img-row-style">Profile Image: </p>
                                    <img src="cael.jpg" alt="Profile Image" className="img-fluid img-thumbnail profile-pic" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Username: {user ? user.userName : ""}</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Password: {password} <Button className="btn btn-secondary" onClick={() => toggleField(passwordShown, setPassword, passwordTrue, passwordStar, setPasswordButtonText, "Password", setPasswordShown)}>{passwordButtonText}</Button></p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Name: {user ? user.profile.firstName : ""} {user ? user.profile.lastName : ""}</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Email: {user ? user.profile.email : ""}</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Phone Number: {user ? user.profile.phone : ""}</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <label>
                                        <input type="checkbox" checked={user ? user.profile.notifications : false} />
                                        <span>Opt in to recieve notifications</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <NavLink className="btn btn-secondary profile-button" onClick={() => pathConfig()} to="/measurementInfo">View Measurements</NavLink>
                                    <span className="note">These are React placeholders</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="profile-box align-div" height="100%">
                    <NavLink className="btn btn-secondary" onClick={() => pathConfig()} to="/shippingInfo">Edit Shipping Information</NavLink>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <h1>Shipping Information</h1>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Name: Cael Erickson</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Address Line 1: 603 N 100 W</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
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
                                <td colSpan="2">
                                    <p>Zip Code: 84601</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <h1>Billing Information</h1>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Card Number: {cardNum} <Button className="btn btn-secondary" onClick={() => toggleField(cardNumShown, setCardNum, cardNumTrue, cardNumStar, setCardNumButtonText, "Card Number", setCardNumShown)}>{cardNumButtonText}</Button></p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Name on Card: Cael Erickson</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <NavLink className="btn btn-secondary profile-button" onClick={() => pathConfig()} to="/billingInfo">Add New Payment Method</NavLink>
                                    <NavLink className="btn btn-secondary profile-button" to="/purchaseHistory">View Purchase History</NavLink>
                                    <span className="note">These are React placeholders</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}