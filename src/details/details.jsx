import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function ConfirmAddToCart({ productAdded }) {
    return (
        <div className="centered" id="confirmAddToCart" style={{ display: "none" }}>
            <p style={{ color: "#3CB371" }}>{productAdded} added to cart!</p>
        </div>
    );
}

export function Details({ setCart }) {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("id");
    const [product, setProduct] = React.useState(null);

    async function updateCart(id) {
        await fetch("/api/shop/cart", {
            method: "PATCH",
            body: JSON.stringify(
                { "id": id },
            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    }

    useEffect(() => {
        async function getProduct() {
            const response = await fetch(`/api/details/${productId}`, {
                credentials: "include"
            });

            const productInfo = await response.json();
            setProduct(productInfo.product);
        }

        getProduct();
    }, []);

    return (
        <main>
            <div className="d-flex flex-row justify-content-around details-div">
                <div className="item-display">
                    <img src={product?.img} alt={product?.name} className="img-thumbnail" />
                    <p>{product?.name}</p>
                    <p>${product?.price}</p>
                    <ConfirmAddToCart productAdded={product?.name} />
                    <Button className="form-control btn btn-secondary" onClick={() => updateCart(product?._id)}>Add to Cart</Button>
                    <NavLink className="form-control btn btn-primary" to={`/purchase?id=${product?._id}`}>Buy Now</NavLink>
                </div>
                <div style={{margin: "10px"}}>
                    {product?.description.map((text) => (
                        <p>{text}</p>
                    ))}
                </div>
            </div>
        </main>
    );
}