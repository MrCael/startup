import React from "react";
import { NavLink } from "react-router-dom";

export function PurchaseHistory() {
    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div centered">
                <h1>Purchase History</h1>
                <p>You have no purchase history, go to the <NavLink to="/shop">shop</NavLink> to start making purchases!</p>
                <NavLink className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px", marginBottom: "10px" }} to="/profile">Back</NavLink>
            </div>
        </main>
    );
}