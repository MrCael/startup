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

    function updateUser(field, value) {
        setUser(prev => ({ ...prev, [field]: value }));
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
                                <p>First Name: <input type="text" className="form-control" onChange={(e) => updateUser("firstName", e.target.value)} defaultValue={user ? user.firstName : ""} /></p>
                            </td>
                            <td>
                                <p>Last Name: <input type="text" className="form-control" onChange={(e) => updateUser("lastName", e.target.value)} defaultValue={user ? user.lastName : ""} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Email: <input type="text" className="form-control" onChange={(e) => updateUser("email", e.target.value)} defaultValue={user ? user.email : ""} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Phone Number: <input type="text" className="form-control" onChange={(e) => updateUser("phone", e.target.value)} defaultValue={user ? user.phone : ""} /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label>
                                    <span><input type="checkbox" onChange={(e) => updateUser("notifications", e.target.checked)} disabled={user ? !user.email : true} /* checked={user ? user.notifications : false} */ /> Opt in to recieve notifications</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="centered">
                                <Button className="btn btn-primary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }} onClick={() => saveInfo()}>{from === "login" ? "Continue" : "Save"}</Button>
                                {from !== "login" && <NavLink className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }} to="/profile">Back</NavLink>}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
            </div>
        </main>
    );
}