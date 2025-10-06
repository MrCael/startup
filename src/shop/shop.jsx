import React from 'react';
import { NavLink } from "react-router-dom";

export function Shop() {
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
                            <button className="form-control btn btn-secondary">Add to Cart</button>
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
                            <button className="form-control btn btn-secondary">Add to Cart</button>
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
                            <button className="form-control btn btn-secondary">Add to Cart</button>
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
                            <button className="form-control btn btn-secondary">Add to Cart</button>
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
                            <button className="form-control btn btn-secondary">Add to Cart</button>
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
                            <button className="form-control btn btn-secondary">Add to Cart</button>
                            <NavLink className="form-control btn btn-primary" to="/purchase">Buy Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}