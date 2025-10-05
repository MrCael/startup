import React from 'react';

export function Login() {
    return (
        <main className="d-flex flex-column flex-wrap justify-content-center align-items-center centered">
            <h1>Welcome to Freedom Dance Footwear!</h1>
            <form method="get" action="shop.html" className="login">
                <input className="form-control" type="email" placeholder="your@email.com" />
                <input className="form-control" type="password" placeholder="password" />
                <button type="submit" className="btn btn-primary form-control">Log In</button>
                <button type="submit" className="btn btn-secondary form-control">Create Account</button>
            </form>
        </main>
    );
}