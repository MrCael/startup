import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { MessageDialog } from "../messageDialog/messageDialog";

export function Unauthenticated({ userName, setUserName, onLogin }) {
    const [password, setPassword] = React.useState("");
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        const response = await fetch("/api/auth/login", {
            method: 'post',
            body: JSON.stringify({ userName: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        
        const body = await response.json();
        if (response?.status === 200) {
            localStorage.setItem("userName", body.userName);
            onLogin(body.userName);
        } else {
            localStorage.setItem("userName", "");
            setDisplayError(`Error: ${body.msg}`);
        }
    }

    return (
        <>
            <div>
                <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <Button className="btn btn-primary form-control" onClick={() => loginUser()} disabled={!userName || !password}>Log In</Button>
                <NavLink className="btn btn-secondary form-control" to="/createUser" disabled={userName || password}>Create Account</NavLink>
            </div>
            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}