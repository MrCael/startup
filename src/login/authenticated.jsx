import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export function Authenticated({ userName, unauthorize, setIsAdmin }) {
    async function logout() {
        await fetch("/api/auth/logout", {
            method: "DELETE",
            credentials: "include"
        });

        unauthorize();
    }

    useEffect(() => {
        async function getUser() {
            const response = await fetch("/api/user/isAdmin", {
                credentials: "include"
            });

            const body = await response.json();
            setIsAdmin(body.isAdmin);
            console.log(body.isAdmin);
        }

        getUser();
    }, []);

    return (
        <>
            <div>
                <h1>Welcome to Freedom Dance Footwear, {userName}!</h1>
            </div>
            <div>
                <NavLink className="btn btn-primary form-control" to="/shop">Shop</NavLink>
                <Button className="btn btn-secondary form-control" onClick={() => logout()}>Log Out</Button>
            </div>
        </>
    );
}