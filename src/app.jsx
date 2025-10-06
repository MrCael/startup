import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { About } from "./about/about";
import { Cart } from "./cart/cart";
import { Contact } from "./contact/contact";
import { Details } from "./details/details";
import { Profile } from "./profile/profile";
import { Purchase } from "./purchase/purchase";
import { Shop } from "./shop/shop";

export default function App() {
    return (
        <BrowserRouter>
            <div className="body d-flex flex-column">
                <header>
                    <nav>
                        <menu className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink to="" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="shop" className="nav-link">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="cart" className="nav-link">Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="profile" className="nav-link">Profile</NavLink>
                            </li>
                            <li className="nav-item opt-item-head">
                                <NavLink to="about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item opt-item-head">
                                <NavLink to="contact" className="nav-link">Contact Us</NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<Login />} exact />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <footer>
                    <p>Author Name(s): <a to="https://github.com/MrCael/startup.git">Cael Erickson</a></p>
                    <p className="opt-item-foot"><NavLink to="about">About</NavLink></p>
                    <p className="opt-item-foot"><NavLink to="contact">Contact Us</NavLink></p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}