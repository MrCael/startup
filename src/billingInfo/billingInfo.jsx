import React from "react";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function CardList({ cardList, addingCard, setAddingCard }) {
    return (
        <div className="centered">
            <p>{cardList.length} cards assigned to this user</p>
            {!addingCard && <Button className="btn btn-secondary form-control" onClick={() => setAddingCard(true)}>Add Card</Button>}
        </div>
    );
}

function AddCard({ cardList, setCardList, setAddingCard }) {
    const [cardNum, setCardNum] = React.useState("");
    const [cardName, setCardName] = React.useState("");
    const [expirationMonth, setExpirationMonth] = React.useState("");
    const [expirationYear, setExpirationYear] = React.useState("");
    const [cvv, setCVV] = React.useState("");

    function addAddress() {
        const prevCardList = [...cardList];
        const newCard = {
            cardNum: cardNum,
            cardName: cardName,
            expirationDate: `${expirationMonth}/${expirationYear}`,
            cvv: cvv
        };

        let newCardList = {};
        if (prevCardList.some(card => card.cardNum === newCard.cardNum && card.cardName === newCard.cardName && card.expirationDate === newCard.expirationDate && card.cvv === newCard.cvv)) {
            newCardList = prevCardList;
        } else {
            newCardList = [...cardList, newCard];
        }

        setCardList(newCardList);
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
                        <p>Name on Card</p>
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
                        <Button className="btn btn-secondary form-control" onClick={() => addAddress()}>Add</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export function BillingInfo({ from }) {
    const [cardList, setCardList] = React.useState([]);
    const [addingCard, setAddingCard] = React.useState(false);

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <h1 className="centered">Billing Information</h1>
                <CardList cardList={cardList} addingCard={addingCard} setAddingCard={setAddingCard} />
                {addingCard && <AddCard cardList={cardList} setCardList={setCardList} setAddingCard={setAddingCard} />}
                <NavLink className="btn btn-primary form-control" to={from === "/login" ? "/measurementInfo" : "/profile"}>{from === "/login" ? "Continue" : "Save"}</NavLink>
            </div>
        </main>
    );
}