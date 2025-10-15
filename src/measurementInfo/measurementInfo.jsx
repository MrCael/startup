import React from "react";
import { NavLink } from "react-router-dom";

export function MeasurementInfo() {
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
                                <p>1</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>1</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>2</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>2</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>3</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>3</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>4</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>4</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>5</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>5</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>5a</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>5a</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>6</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>6</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>6a</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>6a</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>7</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>7</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>7a</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>7a</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>8</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>8</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>8a</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>8a</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>9</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>9</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>10</p>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <p>10</p>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <NavLink className="btn btn-primary form-control" to="/profile">Create User</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}