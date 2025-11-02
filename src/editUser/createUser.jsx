import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import { MessageDialog } from "../messageDialog/messageDialog";
import { AuthState } from "../login/authState";

export function CreateUser({ onAuthChange }) {
    const [setupUserName, setSetupUserName] = React.useState("");
    const [setupPassword, setSetupPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [displayError, setDisplayError] = React.useState(null);
    const navigate = useNavigate();

    async function createUser() {
        const response = await fetch("/api/auth/create", {
            method: "post",
            body: JSON.stringify({ userName: setupUserName, password: setupPassword}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        const body = await response.json();
        if (response?.status === 200) {
            localStorage.setItem("userName", body.userName);
            onAuthChange(AuthState.Authenticated, body.userName);
            navigate("/personalInfo");
        } else {
            localStorage.setItem("userName", "");
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-items-center align-div">
                <div>
                    <h1>Login Credentials</h1>
                </div>
                <div>
                    <p className="no-margin-bottom">Username</p>
                    <input className="form-control" type="text" onChange={(e) => setSetupUserName(e.target.value)} placeholder="username" />
                </div>
                <div>
                    <p className="no-margin-bottom">Password</p>
                    <input className="form-control" type="password" onChange={(e) => setSetupPassword(e.target.value)} placeholder="password" />
                </div>
                <div>
                    <p className="no-margin-bottom">Confirm Password</p>
                    <input className="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="password" />
                </div>
                {setupPassword !== confirmPassword && confirmPassword !== "" && <div>
                    <p className="error-text">Passwords must match</p>
                </div>}
                <div className="centered" style={{ marginTop: "10px" }}>
                    <Button className="btn btn-primary form-control" onClick={() => createUser()} disabled={!setupUserName || !setupPassword || setupPassword !== confirmPassword}>Submit</Button>
                </div>
                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
            </div>
        </main>
    );
}