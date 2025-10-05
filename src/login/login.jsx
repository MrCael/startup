import React from 'react';

export function Login() {
    return (
        <main class="d-flex flex-column flex-wrap justify-content-center align-items-center" style="text-align: center;">
            <h1>Welcome to Freedom Dance Footwear!</h1>
            <form method="get" action="shop.html" class="login">
                <input class="form-control" type="email" placeholder="your@email.com" />
                <input class="form-control" type="password" placeholder="password" />
                <button type="submit" class="btn btn-primary form-control">Log In</button>
                <button type="submit" class="btn btn-secondary form-control">Create Account</button>
            </form>
        </main>
    );
}