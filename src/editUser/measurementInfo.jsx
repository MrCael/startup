import React from "react";
import Button from "react-bootstrap/Button";

function ViewMeasurements() { /// Probably impliment this in a list or something ///
    return (
        <>
            <tr>
                <td>
                    <p>1:</p>
                </td>
                <td>
                    <p>1:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>2:</p>
                </td>
                <td>
                    <p>2:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>3:</p>
                </td>
                <td>
                    <p>3:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>4:</p>
                </td>
                <td>
                    <p>4:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>5:</p>
                </td>
                <td>
                    <p>5:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>5a:</p>
                </td>
                <td>
                    <p>5a:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>6:</p>
                </td>
                <td>
                    <p>6:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>6a:</p>
                </td>
                <td>
                    <p>6a:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>7:</p>
                </td>
                <td>
                    <p>7:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>7a:</p>
                </td>
                <td>
                    <p>7a:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>8:</p>
                </td>
                <td>
                    <p>8:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>8a:</p>
                </td>
                <td>
                    <p>8a:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>9:</p>
                </td>
                <td>
                    <p>9:</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>10:</p>
                </td>
                <td>
                    <p>10:</p>
                </td>
            </tr>
        </>
    );
}

function EditMeasurements() { /// Probably impliment this in a list or something ///
    return (
        <>
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
        </>
    );
}

export function MeasurementInfo({ from }) {
    // If `method` is `true` then the page is in view mode. If it is `false` then is it in edit mode
    const [method, setMethod] = React.useState(from != "login");

    async function saveInfo() {
        const response = await fetch("/api/user/measurementInfo", {
            // code
        });
    }

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <table style={{marginBottom: "10px" }}>
                    <tbody>
                        <tr>
                            <td colSpan="2">
                                <h1 className="centered">Measurements</h1>
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
                        {method && <ViewMeasurements />}
                        {!method && <EditMeasurements />}
                        <tr>
                            <td colSpan="2">
                                <Button className="btn btn-primary form-control" onClick={() => setMethod(!method)}>{method ? "Edit" : "Save"}</Button>
                                {!method && <Button className="btn btn-secondary form-control" onClick={() => setMethod(true)}>Cancel</Button>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}