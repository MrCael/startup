import React from "react";
import { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ActivePageProvider, useActivePage } from "./activePageContext";
import { Login } from "./login/login";
import { About } from "./about/about";
import { Cart } from "./cart/cart";
import { Contact } from "./contact/contact";
import { Details } from "./details/details";
import { Profile } from "./profile/profile";
import { Purchase } from "./purchase/purchase";
import { Shop } from "./shop/shop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

function AppContent() {
    const { activePage, setActivePage } = useActivePage();
    const location = useLocation();

    // Update active page when user clicks a nav link
    const handleNavClick = (path) => {
        setActivePage(path);
    };

    useEffect(() => {
        const knownRoutes = ["/", "/shop", "/cart", "/profile", "/about", "/contact"];
        if (knownRoutes.includes(location.pathname)) {
            setActivePage(location.pathname);
        }
    }, [location.pathname, setActivePage]);

    return (
        <div className="body d-flex flex-column">
            <header>
                <nav>
                    <menu className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink to="/" className={`nav-link ${activePage === "/" ? "active" : ""}`} onClick={() => handleNavClick("/")}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop" className={`nav-link ${activePage === "/shop" ? "active" : ""}`} onClick={() => handleNavClick("/shop")}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className={`nav-link ${activePage === "/cart" ? "active" : ""}`} onClick={() => handleNavClick("/cart")}>Cart</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className={`nav-link ${activePage === "/profile" ? "active" : ""}`} onClick={() => handleNavClick("/profile")}>Profile</NavLink>
                        </li>
                        <li className="nav-item opt-item-head">
                            <NavLink to="/about" className={`nav-link ${activePage === "/about" ? "active" : ""}`} onClick={() => handleNavClick("/about")}>About</NavLink>
                        </li>
                        <li className="nav-item opt-item-head">
                            <NavLink to="/contact" className={`nav-link ${activePage === "/contact" ? "active" : ""}`} onClick={() => handleNavClick("/contact")}>Contact Us</NavLink>
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
                <p>Author Name(s): <a href="https://github.com/MrCael/startup.git">Cael Erickson</a></p>
                <p className="opt-item-foot"><NavLink to="about">About</NavLink></p>
                <p className="opt-item-foot"><NavLink to="contact">Contact Us</NavLink></p>
            </footer>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ActivePageProvider>
                <AppContent />
            </ActivePageProvider>
        </BrowserRouter>
    );
}