import React from "react";

import { Unauthenticated } from "./unauthenticated";
import { Authenticated } from "./authenticated";
import { AuthState } from "./authState";

export function Login({ userName, setUserName, authState, onAuthChange, setIsAdmin }) {
    return (
        <main className="d-flex flex-column flex-wrap justify-content-center align-items-center centered">
            {authState === AuthState.Unauthenticated && <h1>Welcome to Freedom Dance Footwear!</h1>}
            {authState === AuthState.Authenticated && <Authenticated userName={userName} unauthorize={() => onAuthChange(AuthState.Unauthenticated, "")} setIsAdmin={setIsAdmin} />}
            {authState === AuthState.Unauthenticated && <Unauthenticated userName={userName} setUserName={setUserName} onLogin={(loginUserName) => onAuthChange(AuthState.Authenticated, loginUserName)} />}
        </main>
    );
}