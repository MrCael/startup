import React from 'react';
import { NavLink } from "react-router-dom";

export function Cart() {
    return (
        <main className="centered">
            <div className="cart-text">
                <h1>Cael Erickson's Cart</h1>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-around three-div">
                    <div className="card">
                        <div className="card-body">
                            <NavLink to="/details">
                                <img src="clogging.jpg" alt="Clogging Shoes" height="100" />
                            </NavLink>
                            <p>Clogging Shoes</p>
                            <p>$160.00</p>
                        </div>
                        <div className="card-footer d-flex flex-column align-content-center">
                            <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <NavLink to="/details">
                                <img src="tap.jpg.webp" alt="Tap Shoes" height="100" />
                            </NavLink>
                            <p>Tap Shoes</p>
                            <p>$120.00</p>
                        </div>
                        <div className="card-footer">
                        <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <NavLink to="/details">
                                <img src="irish_hard.jpg" alt="Irish Hard Shoes" height="100" />
                            </NavLink>
                            <p>Irish Hard Shoes</p>
                            <p>$180.00</p>
                        </div>
                        <div className="card-footer">
                        <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout-cart">
                <NavLink className="btn btn-secondary" to="/purchase">Checkout Cart</NavLink>
            </div>
        </main>
    );
}