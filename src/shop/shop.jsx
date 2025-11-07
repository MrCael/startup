import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function ConfirmAddToCart({ productAdded }) {
    return (
        <div className="centered" id="confirmAddToCart" style={{ display: "none" }}>
            <p style={{ color: "#3CB371" }}>{productAdded} added to cart!</p>
        </div>
    );
}

export function Shop({ setCart }) {
    const [products, setProducts] = React.useState(null);
    const [productAdded, setProductAdded] = React.useState("");
    const [searchTerm, setSearchTerm] = React.useState("");

    function updateCart(newItem) {
        setCart(prevCart => {
            if (prevCart.some(item => item.name === newItem.name)) {
                return prevCart;
            } else {
                const newCart = [...prevCart, newItem];
                setProductAdded(newItem.name);

                new Promise(() => {
                    document.getElementById("confirmAddToCart").style.display = "block";
                    setTimeout(() => {
                        document.getElementById("confirmAddToCart").style.display = "none";
                    }, 2000);
                });

                return newCart;
            }
        });
    }

    function partitionProducts(products) {
        const partition = [];

        for (let i = 0; i < products.length; i += 3) {
            partition.push(products.slice(i, i + 3));
        }

        return partition;
    }

    useEffect(() => {
        async function getProducts() {
            const response = await fetch(`/api/shop/products${searchTerm ? `?searchTerm=${searchTerm}` : ""}`);

            const productList = await response.json();
            setProducts(partitionProducts(productList.products));
        }

        getProducts();
    }, [searchTerm]);
    
    return (
        <main>
            <input type="text" className="search-bar form-control" onChange={(e) => setSearchTerm(e.target.value)} placeholder="search" />
            <ConfirmAddToCart productAdded={productAdded} />
            <div className="d-flex flex-column justify-content-center">
                {products && products.map((productSet) => (
                    <div className="d-flex justify-content-around three-div">
                        {productSet.map((product) => (
                            <div className="card product">
                                <div className="card-body">
                                    <NavLink to={`/details?id=${product._id}`}>
                                        <img src={product.img} alt={product.name} height="100" />
                                    </NavLink>
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                </div>
                                <div className="card-footer d-flex flex-column align-content-center">
                                    <Button className="form-control btn btn-secondary" onClick={() => updateCart(product)}>Add to Cart</Button>
                                    <NavLink className="form-control btn btn-primary" to={`/purchase?id=${product._id}`}>Buy Now</NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}