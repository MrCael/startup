import React from 'react';

export function Cart() {
    return (
        <main>
            <div style="width: fit-content; margin: auto; margin-top: 10px;">
                <h1>Cael Erickson's Cart</h1>
            </div>
            <div class="d-flex flex-column justify-content-center">
                <div class="d-flex justify-content-around three-div">
                    <div class="card">
                        <div class="card-body">
                            <a href="details.html">
                                <img src="clogging.jpg" alt="Clogging Shoes" height="100" />
                            </a>
                            <p>Clogging Shoes</p>
                            <p>$160.00</p>
                        </div>
                        <div class="card-footer d-flex flex-column align-content-center">
                            <button class="form-control btn btn-primary" onclick="location.href='purchase.html'">Buy Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <a href="details.html">
                                <img src="tap.jpg.webp" alt="Tap Shoes" height="100" />
                            </a>
                            <p>Tap Shoes</p>
                            <p>$120.00</p>
                        </div>
                        <div class="card-footer">
                            <button class="form-control btn btn-primary" onclick="location.href='purchase.html'">Buy Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <a href="details.html">
                                <img src="irish_hard.jpg" alt="Irish Hard Shoes" height="100" />
                            </a>
                            <p>Irish Hard Shoes</p>
                            <p>$180.00</p>
                        </div>
                        <div class="card-footer">
                            <button class="form-control btn btn-primary" onclick="location.href='purchase.html'">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin: auto; margin-top: 10px; margin-bottom: 10px;">
                <button class="btn btn-secondary" onclick="location.href='purchase.html'">Checkout Cart</button>
            </div>
        </main>
    );
}