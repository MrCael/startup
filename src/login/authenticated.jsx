import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export function Authenticated({ userName, onLogout }) {
    return (
        <div>
            <h1>Welcome to Freedom Dance Footwear, {userName}!</h1>
            <NavLink className="btn btn-primary form-control" to="/shop">Shop</NavLink>
            <Button className="btn btn-secondary form-control" onClick={() => onLogout()}>Log Out</Button>
        </div>
    );
}