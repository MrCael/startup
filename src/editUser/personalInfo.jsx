import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink, useNavigate } from "react-router-dom";
import { MessageDialog } from "../messageDialog/messageDialog";

export function PersonalInfo({ from }) {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [profileImg, setProfileImg] = React.useState("");
    const [notifications, setNotifications] = React.useState(false);
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();

    async function saveInfo() {
        const response = await fetch("/api/user/personalInfo", {
            method: "PATCH",
            body: JSON.stringify([
                {
                    "op": "add",
                    "path": "/profile/firstName",
                    "value": firstName
                },
                {
                    "op": "add",
                    "path": "/profile/lastName",
                    "value": lastName
                },
                {
                    "op": "add",
                    "path": "/profile/email",
                    "value": email
                },
                {
                    "op": "add",
                    "path": "/profile/phone",
                    "value": phone
                },
                {
                    "op": "add",
                    "path": "/profile/profileImg",
                    "value": profileImg
                },
                {
                    "op": "add",
                    "path": "/profile/notifications",
                    "value": notifications
                }
            ]),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            credentials: "include"
        });

        if (response?.status == 200) {
            navigate(from === "login" ? "/shippingInfo" : "/profile");
        } else {
            const body = await response.json();
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <table style={{marginBottom: "10px"}}>
                    <tbody>
                        <tr>
                            <td colSpan="2" className="centered">
                                <h1>Personal Information</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>First Name: <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)} /></p>
                            </td>
                            <td>
                                <p>Last Name: <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Email: <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Phone Number: <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Profile Image: <input type="file" className="form-control" onChange={(e) => setProfileImg(e.target.value)} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label>
                                    <span><input type="checkbox" onChange={(e) => setNotifications(e.target.checked)} disabled={!email} /> Opt in to recieve notifications</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Button className="btn btn-primary form-control" onClick={() => saveInfo()}>{from === "login" ? "Continue" : "Save"}</Button>
                                {from !== "login" && <NavLink className="btn btn-secondary form-control" to="/profile">Back</NavLink>}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
            </div>
        </main>
    );
}