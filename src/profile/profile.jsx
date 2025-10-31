import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export function Profile({ setFrom }) {
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
                                    <p>Username: cerickson</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Password: {password} <Button className="btn btn-secondary" onClick={() => toggleField(passwordShown, setPassword, passwordTrue, passwordStar, setPasswordButtonText, "Password", setPasswordShown)}>{passwordButtonText}</Button></p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Name: Cael Erickson</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Email: cael.erickson@gmail.com</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Phone Number:(801) 205-7320</p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <label>
                                        <input type="checkbox" value="1" />
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