import React from "react";
import { useEffect } from "react";
import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { ActivePageProvider, useActivePage } from "./activePageContext";
import { Login } from "./login/login";
import { About } from "./about/about";
import { Cart } from "./cart/cart";
import { Contact } from "./contact/contact";
import { Details } from "./details/details";
import { PersonalInfo } from "./personalInfo/personalInfo";
import { ShippingInfo } from "./shippingInfo/shippingInfo";
import { BillingInfo } from "./billingInfo/billingInfo";
import { MeasurementInfo } from "./measurementInfo/measurementInfo";
import { Profile } from "./profile/profile";
import { Purchase } from "./purchase/purchase";
import { PurchaseHistory } from "./purchaseHistory/purchaseHistory";
import { Shop } from "./shop/shop";
import { AuthState } from "./login/authState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

function AppContent() {
    const { activePage, setActivePage } = useActivePage();
    const location = useLocation();
    const [userName, setUserName] = React.useState(localStorage.getItem("userName") || "");
    const [authState, setAuthState] = React.useState(userName !== "" ? AuthState.Authenticated : AuthState.Unauthenticated);
    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [loginInfoSet, setLoginInfoSet] = React.useState(false);
    const [from, setFrom] = React.useState("login");

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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("userName", userName);
    }, [userName]);

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
                        {authState === AuthState.Authenticated && <li className="nav-item">
                            <NavLink to="/cart" className={`nav-link ${activePage === "/cart" ? "active" : ""}`} onClick={() => handleNavClick("/cart")}>Cart</NavLink>
                        </li>}
                        {authState === AuthState.Authenticated && <li className="nav-item">
                            <NavLink to="/profile" className={`nav-link ${activePage === "/profile" ? "active" : ""}`} onClick={() => handleNavClick("/profile")}>Profile</NavLink>
                        </li>}
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
                <Route path="/" element={<Login userName={userName} setUserName={setUserName} authState={authState} onAuthChange={(authState, userName) => { setAuthState(authState); setUserName(userName); }} />} exact />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart cart={cart} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/details" element={<Details />} />
                <Route path="/personalInfo" element={<PersonalInfo from={from} loginInfoSet={loginInfoSet} />} />
                <Route path="/shippingInfo" element={<ShippingInfo from={from} />} />
                <Route path="/billingInfo" element={<BillingInfo from={from} />} />
                <Route path="/measurementInfo" element={<MeasurementInfo />} />
                <Route path="/profile" element={<Profile setLoginInfoSet={setLoginInfoSet} setFrom={setFrom} />} />
                <Route path="/purchase" element={<Purchase setCart={setCart} />} />
                <Route path="/purchaseHistory" element={<PurchaseHistory />} />
                <Route path="/shop" element={<Shop setCart={setCart} />} />
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