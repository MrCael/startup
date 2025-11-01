import React from "react";
import Button from "react-bootstrap/Button";

import { useEffect } from "react";

function ViewMeasurements({ measurements }) {
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

function EditMeasurements({ measurements }) {
    function sortMeasurements(keyA, keyB) {
        const [, numA, letterA = ""] = keyA.match(/^(\d+)([a-zA-Z]?)$/);
        const [, numB, letterB = ""] = keyB.match(/^(\d+)([a-zA-Z]?)$/);

        const numDiff = Number(numA) - Number(numB);
        return numDiff !== 0 ? numDiff : letterA.localeCompare(letterB);
    }

    return (
        <div className="d-flex flex-row">
            <div style={{ margin: "10px" }}>
                {Object.entries(measurements.left).sort(([keyA], [keyB]) => sortMeasurements(keyA, keyB)).map(([key, value]) => (
                    <div>
                        <p style={{ paddingLeft: "10px" }}>{key}</p>
                        <input type="text" className="form-control" defaultValue={value || ""} />
                    </div>
                ))}
            </div>
            <div style={{ margin: "10px" }}>
                {Object.entries(measurements.right).sort(([keyA], [keyB]) => sortMeasurements(keyA, keyB)).map(([key, value]) => (
                    <div>
                        <p style={{ paddingLeft: "10px" }}>{key}</p>
                        <input type="text" className="form-control" defaultValue={value || ""} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function MeasurementInfo({ from }) {
    // If `method` is `true` then the page is in view mode. If it is `false` then is it in edit mode
    const [method, setMethod] = React.useState(from != "login");
    const [measurements, setMeasurements] = React.useState(null);

    async function saveInfo() {
        const response = await fetch("/api/user/measurementInfo", {
            method: "PATCH",
            body: measurements,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            credentials: "include"
        });
        
        const body = await response.json();
        console.log(body.msg);
    }

    useEffect(() => {
        async function getMeasurements() {
            const response = await fetch("/api/user/measurementInfo", {
                credentials: "include"
            });


            const body = await response.json();
            setMeasurements(body.measurements);
            console.log(measurements);
        }

        getMeasurements();
    }, []);

    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <div className="centered">
                    <h1 className="centered">Measurements</h1>
                    <img src="foot_measurements.png" alt="Foot Measurements" className="img-fluid img-thumbnail measurement-pic" />
                    <div className="d-flex flex-row justify-content-around" style={{ marginTop: "10px" }}>
                        <h3 className="centered">Left</h3>
                        <h3 className="centered">Right</h3>
                    </div>
                </div>
                <div>
                    {method && measurements && <ViewMeasurements measurements={measurements} />}
                    {!method && measurements && <EditMeasurements measurements={measurements} />}
                </div>
                <div className="centered">
                    <Button className="btn btn-primary form-control" onClick={() => setMethod(!method)}>{method ? "Edit" : "Save"}</Button>
                    {!method && <Button className="btn btn-secondary form-control" onClick={() => setMethod(true)}>Cancel</Button>}
                </div>
            </div>
        </main>
    );
}