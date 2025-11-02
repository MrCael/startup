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
            <div className="d-flex flex-column" style={{ width: "fit-content", margin: "auto" }}>
                <NavLink className="btn btn-primary form-control centered-button" style={{ width: "fit-content", margin: "auto", marginTop: "10px", marginBottom: "10px" }} onClick={() => pathConfig()} to="/personalInfo">Edit Profile</NavLink>
                <div className="centered" style={{ marginBottom: "10px" }}>
                    <div className="card" style={{ marginBottom: "10px" }}>
                        <div className="card-body">
                            <h1>{user ? user.userName : ""}'s Profile</h1>
                            <img src="cael.jpg" alt="Profile Image" className="img-fluid img-thumbnail profile-pic" />
                            <p><b>Name:</b> {user ? `${user.profile.firstName} ${user.profile.lastName}` : ""}</p>
                            <p><b>Password:</b> {password}</p>
                            <Button className="btn btn-secondary" style={{ marginBottom: "16px" }} onClick={() => toggleField(passwordShown, setPassword, passwordTrue, passwordStar, setPasswordButtonText, "Password", setPasswordShown)}>{passwordButtonText}</Button>
                            <p><b>Name:</b> {user ? user.profile.firstName : ""} {user ? user.profile.lastName : ""}</p>
                            <p><b>Email:</b> {user ? user.profile.email : ""}</p>
                            <p><b>Phone Number:</b> {user ? user.profile.phone : ""}</p>
                            <p>
                                <b>{user ? (user.profile.notifications ? "User recieves notifications" : "User does not recieve notifications") : ""}</b>
                            </p>
                        </div>
                    </div>
                    <NavLink className="btn btn-primary profile-button" onClick={() => pathConfig()} to="/shippingInfo">Manage Shipping Info</NavLink>
                    <NavLink className="btn btn-primary profile-button" onClick={() => pathConfig()} to="/billingInfo">Manage Billing Info</NavLink>
                    <NavLink className="btn btn-primary profile-button" onClick={() => pathConfig()} to="/measurementInfo">Manage Measurements</NavLink>
                    <NavLink className="btn btn-primary profile-button" to="/purchaseHistory">View Purchase History</NavLink>
                </div>
            </div>
        </main>
    );
}