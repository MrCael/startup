import React from 'react';

export function Shop() {
    return (
        <main>
            <input type="text" class="search-bar form-control" placeholder="search" />
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
                            <button class="form-control btn btn-secondary" onclick="">Add to Cart</button>
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
                            <button class="form-control btn btn-secondary" onclick="">Add to Cart</button>
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
                            <button class="form-control btn btn-secondary" onclick="">Add to Cart</button>
                            <button class="form-control btn btn-primary" onclick="location.href='purchase.html'">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-around three-div">
                    <div class="card">
                        <div class="card-body">
                            <a href="details.html">
                                <img src="ballet.jpeg" alt="Ballet Shoes" height="100" />
                            </a>
                            <p>Ballet Shoes</p>
                            <p>$30.00</p>
                        </div>
                        <div class="card-footer">
                            <button class="form-control btn btn-secondary" onclick="">Add to Cart</button>
                            <button class="form-control btn btn-primary" onclick="location.href='purchase.html'">Buy Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <a href="details.html">
                                <img src="pointe.jpeg" alt="Pointe Shoes" height="100" />
                            </a>
                            <p>Pointe Shoes</p>
                            <p>$150.00</p>
                        </div>
                        <div class="card-footer">
                            <button class="form-control btn btn-secondary" onclick="">Add to Cart</button>
                            <button class="form-control btn btn-primary" onclick="location.href='purchase.html'">Buy Now</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <a href="details.html">
                                <img src="character.jpeg" alt="Character Shoes" height="100" />
                            </a>
                            <p>Character Shoes</p>
                            <p>$140.00</p>
                        </div>
                        <div class="card-footer">
                            <button class="form-control btn btn-secondary" onclick="">Add to Cart</button>
                            <button class="form-control btn btn-primary" onclick="location.href='purchase.html'">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}