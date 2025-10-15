import React from "react";
import Button from "react-bootstrap/Button";
import { MessageDialog } from "./messageDialog";

export function Unauthenticated({ userName, setUserName, onLogin }) {
    const [password, setPassword] = React.useState("");
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() { // turn these into useEffects calls in another file instead
        localStorage.setItem('userName', userName);
        onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        onLogin(userName);
    }

    return (
        <>
            <div>
                <input className="form-control" type="email" onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com" />
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <Button className="btn btn-primary form-control" onClick={() => loginUser()} disabled={!userName || !password}>Log In</Button>
                <Button className="btn btn-secondary form-control" onClick={() => createUser()} disabled={!userName || !password}>Create Account</Button>
            </div>
            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    );
}