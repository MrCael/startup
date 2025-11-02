import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { MessageDialog } from "../messageDialog/messageDialog";

function AddAddress({ setAddressList, setAddingAddress, setDisplayError }) {
    const [addressFirstName, setAddressFirstName] = React.useState("");
    const [addressLastName, setAddressLastName] = React.useState("");
    const [addressLine1, setAddressLine1] = React.useState("");
    const [addressLine2, setAddressLine2] = React.useState("");
    const [addressCity, setAddressCity] = React.useState("");
    const [addressState, setAddressState] = React.useState("");
    const [addressZip, setAddressZip] = React.useState("");

    async function addAddress() {
        const response = await fetch("/api/user/shippingInfo", {
            method: "PATCH",
            body: JSON.stringify([
                {
                    "op": "add",
                    "path": "/profile/addressList/-",
                    "value": {
                        firstName: addressFirstName,
                        lastName: addressLastName,
                        line1: addressLine1,
                        line2: addressLine2,
                        city: addressCity,
                        state: addressState,
                        zip: addressZip
                    }
                }
            ]),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            credentials: "include"
        });

        const body = await response.json();

        if (response.status == 409) {
            setDisplayError(`Error: ${body.msg}`);
        }

        setAddressList(body.addressList);
        setAddingAddress(false);
    }

    return (
        <table style={{marginBottom: "10px"}}>
            <tbody>
                <tr>
                    <td>
                        <p>First Name <input type="text" className="form-control" onChange={(e) => setAddressFirstName(e.target.value)} /></p>
                    </td>
                    <td>
                        <p>Last Name <input type="text" className="form-control" onChange={(e) => setAddressLastName(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p>Address Line 1 <input type="text" className="form-control" onChange={(e) => setAddressLine1(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p>Address Line 2 <input type="text" className="form-control" onChange={(e) => setAddressLine2(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p>City <input type="text" className="form-control" onChange={(e) => setAddressCity(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            State
                            <select className="form-select" onChange={(e) => setAddressState(e.target.value)}>
                                <option value="--">--</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </select>
                        </p>
                    </td>
                    <td>
                        <p>Zip Code <input type="text" className="form-control" onChange={(e) => setAddressZip(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" className="centered">
                        <Button className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px", marginLeft: "7px" }} onClick={() => addAddress()}>Add</Button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" className="centered">
                        <Button className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px", marginLeft: "7px" }} onClick={() => setAddingAddress(false)}>Cancel</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export function ShippingInfo({ from }) {
    const [addressList, setAddressList] = React.useState(null);
    const [addingAddress, setAddingAddress] = React.useState(false);
    const [displayError, setDisplayError] = React.useState(null);
    
    useEffect(() => {
        async function getAddresses() {
            const response = await fetch("/api/user/shippingInfo", {
                credentials: "include"
            });

            const body = await response.json();
            setAddressList(body.addressList);
        }

        getAddresses();
    }, []);

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <h1 className="centered">Shipping Information</h1>
                <div className="d-flex flex-column centered" style={{ margin: "auto" }}>
                    {addressList && addressList.map((address) => {
                        return (
                            <div className="card" style={{ width: "fit-content", margin: "auto", marginTop: "10px", marginBottom: "10px" }}>
                                <div className="card-body">
                                    <p className="address-info">{address.firstName} {address.lastName}</p>
                                    <p className="address-info">{address.line1}</p>
                                    {address.line2 && <p className="address-info">{address.line2}</p>}
                                    <p className="address-info">{address.city} {address.state} {address.zip}</p>
                                </div>
                            </div>
                        );
                    })}
                    {addingAddress && <AddAddress setAddressList={setAddressList} setAddingAddress={setAddingAddress} />}
                    {!addingAddress && <Button className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginBottom: "10px" }} onClick={() => setAddingAddress(true)}>Add Address</Button>}
                    {!addingAddress && <NavLink className="btn btn-primary form-control" style={{ width: "fit-content", margin: "auto", marginBottom: "10px" }} to={from == "login" ? "/billingInfo" : "/profile"}>{from == "login" ? "Continue" : "Back"}</NavLink>}
                </div>
                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
            </div>
        </main>
    );
}