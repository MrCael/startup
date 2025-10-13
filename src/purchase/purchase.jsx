import React from "react";

export function Purchase() {
    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <form method="get" action="shop.html">
                    <table style={{marginBottom: "10px"}}>
                        <tbody>
                            <tr>
                                <td colSpan="2" className="centered">
                                    <h1>Shipping Information</h1> {/* Edit to select shipping address if user has any defined, and to fill one out otherwise */}
                                </td>
                            </tr>
                            <tr>
                                <td width="50%">
                                    <p>First Name</p>
                                    <input type="text" className="form-control" autoFocus />
                                </td>
                                <td>
                                    <p>Last Name</p>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Address Line 1</p>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Address Line 2</p>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>City</p>
                                    <input type="text" className="form-control" />
                                </td>
                                <td>
                                    <p>State</p>
                                    <select className="form-select">
                                        <option value="--">--</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Zip Code</p>
                                    <input type="text" className="form-control" pattern="\d{5}" maxLength="5" />
                                </td>
                            </tr>
                            <tr><td><br /></td></tr>
                            <tr>
                                <td colSpan="2" className="centered">
                                    <h1>Billing Information</h1> {/* Edit to select billing information if user has any defined, and to fill one out otherwise */}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Card Number</p>
                                    <input type="text" className="form-control" pattern="\d{4} \d{4} \d{4} \d{4}" maxLength="16" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>Name on Card</p>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="date-select">Expiration Date</p>
                                    <div className="d-flex flex-row">
                                        <select className="form-select">
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
                                        <select className="form-select">
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                            <option value="2031">2031</option>
                                            <option value="2032">2032</option>
                                            <option value="2033">2033</option>
                                            <option value="2034">2034</option>
                                            <option value="2035">2035</option>
                                            <option value="2036">2036</option>
                                            <option value="2037">2037</option>
                                            <option value="2038">2038</option>
                                            <option value="2039">2039</option>
                                            <option value="2040">2040</option>
                                            <option value="2041">2041</option>
                                            <option value="2042">2042</option>
                                            <option value="2043">2043</option>
                                            <option value="2044">2044</option>
                                            <option value="2045">2045</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <p>CVV</p>
                                    <input type="text" className="form-control" pattern="\d{3}" maxLength="3" />
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
                            <tr><td><br /></td></tr>
                            <tr>
                                <td colSpan="2">
                                    <input type="submit" className="btn btn-secondary form-control" value="Complete Transaction" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </main>
    );
}