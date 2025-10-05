import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body d-flex flex-column">
            <header>
                <nav>
                    <menu class="nav nav-tabs">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link active">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="shop.html" class="nav-link">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a href="cart.html" class="nav-link">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a href="profile.html" class="nav-link">Profile</a>
                        </li>
                        <li class="nav-item opt-item-head">
                            <a href="about.html" class="nav-link">About</a>
                        </li>
                        <li class="nav-item opt-item-head">
                            <a href="contact.html" class="nav-link">Contact Us</a>
                        </li>
                    </menu>
                </nav>
            </header>
            <main></main>
            <footer>
                <p>Author Name(s): <a href="https://github.com/MrCael/startup.git">Cael Erickson</a></p>
                <p class="opt-item-foot"><a href="about.html">About</a></p>
                <p class="opt-item-foot"><a href="contact.html">Contact Us</a></p>
            </footer>
        </div>
    );
}