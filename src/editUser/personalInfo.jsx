import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { MessageDialog } from "../messageDialog/messageDialog";

export function PersonalInfo({ from }) {
    const [user, setUser] = React.useState(null);
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();

    async function saveInfo() {
        const response = await fetch("/api/user/personalInfo", {
            method: "PATCH",
            body: JSON.stringify([
                {
                    "op": "add",
                    "path": "/profile",
                    "value": user
                }
            ]),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            credentials: "include"
        });

        const body = await response.json();

        if (body.user.profile.notifications) {
            await fetch("/api/user/email", {
                method: "POST",
                body: JSON.stringify({
                    to: body.user.profile.email,
                    subject: "Welcome to Freedom Dance Footwear!",
                    html: `<h1>Welcome to Freedom Dance Footwear, ${body.user.profile.firstName}!</h1>
                        <p>We're so excited to be able to provide for all of your dance footwear needs</p>
                        <p>Please don't hesitate to contact us with any questions or concerns</p>`
                }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });
        }

        if (response?.status == 200) {
            navigate(from === "login" ? "/shippingInfo" : "/profile");
        } else {
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    function updateUser(e) {
        setUser(prev => ({ ...prev, [e.target.name]: (e.target.type === "checkbox" ? e.target.checked : e.target.value) }));
    }
        
    useEffect(() => {
        async function getInfo() {
            const response = await fetch("/api/user/personalInfo", {
                credentials: "include"
            });

            const body = await response.json();
            setUser(body.profile);
        }

        getInfo();
    }, []);

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
                                <p>First Name: <input type="text" className="form-control" name="firstName" onChange={updateUser} defaultValue={user?.firstName || ""} /></p>
                            </td>
                            <td>
                                <p>Last Name: <input type="text" className="form-control" name="lastName" onChange={updateUser} defaultValue={user?.lastName || ""} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Email: <input type="text" className="form-control" name="email" onChange={updateUser} defaultValue={user?.email || ""} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Phone Number: <input type="text" className="form-control" name="phone" onChange={updateUser} defaultValue={user?.phone || ""} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label>
                                    <span><input type="checkbox" name="notifications" onChange={updateUser} disabled={user ? !user.email : true} checked={user ? user?.notifications : false} /> Opt in to recieve notifications</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="centered">
                                <div className="d-flex flex-column justify-content-center">
                                    <Button className="btn btn-primary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }} onClick={() => saveInfo()}>{from == "login" ? "Continue" : "Save"}</Button>
                                    {from !== "login" && <NavLink className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }} to="/profile">Back</NavLink>}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
            </div>
        </main>
    );
}