import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export function Profile({ setFrom }) {
    const [user, setUser] = React.useState(null);

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
                            <p><b>Name:</b> {user ? `${user.profile.firstName} ${user.profile.lastName}` : ""}</p>
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