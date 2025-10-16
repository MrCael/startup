import React from "react";
import { NavLink } from "react-router-dom";

export function MeasurementInfo({ from, method }) {
    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <table style={{marginBottom: "10px" }}>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <h1 className="centered">Billing Information</h1>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <img src="foot_measurements.png" alt="Foot Measurements" className="img-fluid img-thumbnail measurement-pic" />
                            </td>
                        </tr>
                        <tr>
                            <td className="centered">
                                <h3>Left</h3>
                            </td>
                            <td className="centered">
                                <h3>Right</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>1{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>1{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>2{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>2{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>3{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>3{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>4{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>4{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>5{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>5{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>5a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>5a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>6{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>6{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>6a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>6a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>7{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>7{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>7a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>7a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>8{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>8{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>8a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>8a{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>9{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>9{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>10{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                            <td>
                                <p>10{method ==="view" && ":"}</p>
                                {method === "edit" && <input type="text" className="form-control" />}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                {method === "edit" && <NavLink className="btn btn-primary form-control" to="/profile">{from === "login" ? "Create User" : "Save"}</NavLink>}
                                {from !== "login" && <NavLink className="btn btn-secondary form-control" to="/profile">Back</NavLink>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}