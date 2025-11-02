import React from "react";
import { NavLink } from "react-router-dom";

function EmptyCart() {
    return (
        <>
            <p>Your cart is currently empty, head to the <NavLink to="/shop">shop</NavLink>!</p>
        </>
    );
}

function FullCart({ cart }) {
    return (
        <>
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-around three-div">
                    {cart.map((item) => (
                        <div className="card product">
                            <div className="card-body">
                                <NavLink to="/details">
                                    <img src={item.img} alt={item.name} height="100" />
                                </NavLink>
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                            </div>
                            <div className="card-footer d-flex flex-column align-content-center">
                                <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="checkout-cart">
                <NavLink className="btn btn-secondary" to="/purchase">Checkout Cart</NavLink>
            </div>
        </>
    );
}

export function Cart({ cart }) {
    return (
        <main className="centered">
            <div className="cart-text">
                <h1>Cael Erickson's Cart</h1>
            </div>
            {cart.length === 0 && <EmptyCart />}
            {cart.length > 0 && <FullCart cart={cart} />}
        </main>
    );
}