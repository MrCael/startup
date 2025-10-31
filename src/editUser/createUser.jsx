import React from "react";
import Button from "react-bootstrap/Button";

export function CreateUser() {
    const [setupUserName, setSetupUserName] = React.useState("");
    const [setupPassword, setSetupPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-items-center align-div">
                <div>
                    <h1>Login Credentials</h1>
                </div>
                <div>
                    <p className="no-margin-bottom">Username</p>
                    <input className="form-control" type="email" onChange={(e) => setSetupUserName(e.target.value)} placeholder="your@email.com" />
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
                    <Button className="btn btn-primary form-control" disabled={!setupUserName || !setupPassword || setupPassword !== confirmPassword}>Submit</Button>
                </div>
            </div>
        </main>
    );
}