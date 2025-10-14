import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export function Shop({ updateCart }) {
    const products = [
        {img: "clogging.jpg", name: "Clogging Shoes", price: 160.00},
        {img: "tap.jpg.webp", name: "Tap Shoes", price: 120.00},
        {img: "irish_hard.jpg", name: "Irish Hard Shoes", price: 180.00},
        {img: "ballet.jpeg", name: "Ballet Shoes", price: 30.00},
        {img: "pointe.jpeg", name: "Point Shoes", price: 150.00},
        {img: "character.jpeg", name: "Character Shoes", price: 140.00}
    ];
    
    return (
        <main>
            <input type="text" className="search-bar form-control" placeholder="search" />
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
                            <Button className="form-control btn btn-secondary" onClick={() => updateCart(products[0])}>Add to Cart</Button>
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
                            <Button className="form-control btn btn-secondary" onClick={() => updateCart(products[1])}>Add to Cart</Button>
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
                            <Button className="form-control btn btn-secondary" onClick={() => updateCart(products[2])}>Add to Cart</Button>
                            <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around three-div" style={{margin: "10px"}}>
                    <div className="card">
                        <div className="card-body">
                            <NavLink to="/details">
                                <img src="ballet.jpeg" alt="Ballet Shoes" height="100" />
                            </NavLink>
                            <p>Ballet Shoes</p>
                            <p>$30.00</p>
                        </div>
                        <div className="card-footer">
                            <Button className="form-control btn btn-secondary" onClick={() => updateCart(products[3])}>Add to Cart</Button>
                            <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <NavLink to="/details">
                                <img src="pointe.jpeg" alt="Pointe Shoes" height="100" />
                            </NavLink>
                            <p>Pointe Shoes</p>
                            <p>$150.00</p>
                        </div>
                        <div className="card-footer">
                            <Button className="form-control btn btn-secondary" onClick={() => updateCart(products[4])}>Add to Cart</Button>
                            <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <NavLink to="/details">
                                <img src="character.jpeg" alt="Character Shoes" height="100" />
                            </NavLink>
                            <p>Character Shoes</p>
                            <p>$140.00</p>
                        </div>
                        <div className="card-footer">
                            <Button className="form-control btn btn-secondary" onClick={() => updateCart(products[5])}>Add to Cart</Button>
                            <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}