import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function AddressList({ addressList, addingAddress, setAddingAddress }) {
    // return addressList.map((address) => (
    //     <div></div>
    // ));

    return (
        <div className="centered">
            <p>{addressList.length} addresses assigned to this user</p>
            {!addingAddress && <Button className="btn btn-secondary form-control" onClick={() => setAddingAddress(true)}>Add Address</Button>}
        </div>
    );
}

function AddAddress({ addressList, setAddressList, setAddingAddress }) {
    const [addressFirstName, setAddressFirstName] = React.useState("");
    const [addressLastName, setAddressLastName] = React.useState("");
    const [addressLine1, setAddressLine1] = React.useState("");
    const [addressLine2, setAddressLine2] = React.useState("");
    const [addressCity, setAddressCity] = React.useState("");
    const [addressState, setAddressState] = React.useState("");
    const [addressZip, setAddressZip] = React.useState("");

    function addAddress() {
        const prevAddressList = [...addressList];
        const newAddress = {
            firstName: addressFirstName,
            lastName: addressLastName,
            line1: addressLine1,
            line2: addressLine2,
            city: addressCity,
            state: addressState,
            zip: addressZip
        };

        let newAddressList = {};
        if (prevAddressList.some(address => address.firstName === newAddress.firstName && address.lastName === newAddress.lastName && address.line1 === newAddress.line1 && address.line2 === newAddress.line2 && address.city === newAddress.city && address.state === newAddress.state && address.zip === newAddress.zip)) {
            newAddressList = prevAddressList;
        } else {
            newAddressList = [...addressList, newAddress];
        }

        setAddressList(newAddressList);
        setAddingAddress(false);
    }

    return (
        <table style={{marginBottom: "10px"}}>
            <tbody>
                <tr>
                    <td>
                        <p>First Name: <input type="text" className="form-control" onChange={(e) => setAddressFirstName(e.target.value)} /></p>
                    </td>
                    <td>
                        <p>Last Name: <input type="text" className="form-control" onChange={(e) => setAddressLastName(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p>Address Line 1: <input type="text" className="form-control" onChange={(e) => setAddressLine1(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p>Address Line 2: <input type="text" className="form-control" onChange={(e) => setAddressLine2(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p>City: <input type="text" className="form-control" onChange={(e) => setAddressCity(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>
                            State:
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
                        <p>Zip Code: <input type="text" className="form-control" onChange={(e) => setAddressZip(e.target.value)} /></p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Button className="btn btn-secondary form-control" onClick={() => addAddress()}>Add</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export function ShippingInfo({ from }) {
    const [addressList, setAddressList] = React.useState([]);
    const [addingAddress, setAddingAddress] = React.useState(false);

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <h1 className="centered">Shipping Information</h1>
                <AddressList addressList={addressList} addingAddress={addingAddress} setAddingAddress={setAddingAddress} />
                {addingAddress && <AddAddress addressList={addressList} setAddressList={setAddressList} setAddingAddress={setAddingAddress} />}
                <NavLink className="btn btn-primary form-control" to={from === "login" ? "/billingInfo" : "/profile"}>{from === "login" ? "Continue" : "Save"}</NavLink>
                {from !== "login" && <NavLink className="btn btn-primary form-control" to="/profile">Back</NavLink>}
            </div>
        </main>
    );
}