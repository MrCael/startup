import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import { MessageDialog } from "../messageDialog/messageDialog";

function AddCard({ setCardList, setAddingCard }) {
    const [cardNum, setCardNum] = React.useState("");
    const [cardName, setCardName] = React.useState("");
    const [expirationMonth, setExpirationMonth] = React.useState("01");
    const [expirationYear, setExpirationYear] = React.useState("25");
    const [cvv, setCVV] = React.useState("");

    async function addAddress() {
        const response = await fetch("/api/user/billingInfo", {
            method: "PATCH",
            body: JSON.stringify([
                {
                    "op": "add",
                    "path": "/profile/cardList/-",
                    "value": {
                        cardNum: cardNum,
                        cardName: cardName,
                        expirationDate: `${expirationMonth}/${expirationYear}`,
                        cvv: cvv
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

        setCardList(body.cardList);
        setAddingCard(false);
    }

    return (
        <table style={{marginBottom: "10px"}}>
            <tbody>
                <tr>
                    <td colSpan="2">
                        <p>Card Number</p>
                        <input type="text" className="form-control" pattern="\d{4} \d{4} \d{4} \d{4}" maxLength="16" onChange={(e) => setCardNum(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <p>Name on Card</p> {/* At some point make this auto-format */}
                        <input type="text" className="form-control" onChange={(e) => setCardName(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="date-select">Expiration Date</p>
                        <div className="d-flex flex-row">
                            <select className="form-select" onChange={(e) => setExpirationMonth(e.target.value)}>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select className="form-select" onChange={(e) => setExpirationYear(e.target.value)}>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <p>CVV</p>
                        <input type="text" className="form-control" pattern="\d{3}" maxLength="3" onChange={(e) => setCVV(e.target.value)} />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <label>
                            <input type="checkbox" name="shipping_billing_same" />
                            <span>Billing address same as shipping address?</span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Button className="btn btn-secondary form-control" style={{ width: "fit-content", marginTop: "10px", marginLeft: "7px" }} onClick={() => addAddress()}>Add</Button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Button className="btn btn-secondary form-control" style={{ width: "fit-content", marginTop: "10px", marginLeft: "7px" }} onClick={() => setAddingCard(false)}>Cancel</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export function BillingInfo({ from }) {
    const [cardList, setCardList] = React.useState(null);
    const [addingCard, setAddingCard] = React.useState(false);
    const [displayError, setDisplayError] = React.useState(null);

    useEffect(() => {
        async function getCards() {
            const response = await fetch("/api/user/billingInfo", {
                credentials: "include"
            });

            const body = await response.json();
            setCardList(body.cardList);
        }

        getCards();
    }, []);

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div" style={{ width: "fit-content" }}>
                <h1 className="centered">Billing Information</h1>
                <div className="d-flex flex-column centered" style={{ margin: "auto" }}>
                    {cardList && cardList.map((card) => {
                        return (
                            <div className="card centered" style={{ width: "fit-content", margin: "auto", marginTop: "10px", marginBottom: "10px" }}>
                                <div className="card-body">
                                    <p className="address-info">{card.cardName}</p>
                                    <p className="address-info">{"**** **** **** " + card.cardNum.slice(12)}</p>
                                    <p className="address-info">{"expires: " + card.expirationDate}</p>
                                </div>
                            </div>
                        );
                    })}
                    {addingCard && <AddCard setCardList={setCardList} setAddingCard={setAddingCard} />}
                    {!addingCard && <Button className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginBottom: "10px" }} onClick={() => setAddingCard(true)}>Add Card</Button>}
                    {!addingCard && <NavLink className="btn btn-primary form-control" style={{ width: "fit-content", margin: "auto", marginBottom: "10px" }} to={from == "login" ? "/measurementInfo" : "/profile"}>{from == "login" ? "Continue" : "Back"}</NavLink>}
                </div>
                <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
            </div>
        </main>
    );
}