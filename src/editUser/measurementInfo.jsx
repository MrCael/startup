import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";

function ViewMeasurements({ measurements }) { /// The formatting needs to be fixed here ///
    const measurementList = structuredClone(measurements);

    function sortMeasurements(keyA, keyB) {
        const [, numA, letterA = ""] = keyA.match(/^(\d+)([a-zA-Z]?)$/);
        const [, numB, letterB = ""] = keyB.match(/^(\d+)([a-zA-Z]?)$/);

        const numDiff = Number(numA) - Number(numB);
        return numDiff !== 0 ? numDiff : letterA.localeCompare(letterB);
    }

    return (
        <div className="d-flex flex-row justify-content-around">
            <div style={{ margin: "10px" }}>
                {Object.entries(measurementList.left).sort(([keyA], [keyB]) => sortMeasurements(keyA, keyB)).map(([key, value]) => (
                    <div className="centered">
                        <p><b>{key}:</b> {value} {value ? "in." : ""}</p>
                    </div>
                ))}
            </div>
            <div style={{ margin: "10px" }}>
                {Object.entries(measurementList.right).sort(([keyA], [keyB]) => sortMeasurements(keyA, keyB)).map(([key, value]) => (
                    <div className="centered">
                        <p><b>{key}:</b> {value} {value ? "in." : ""}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function EditMeasurements({ measurements, setMeasurements }) {
    const measurementList = structuredClone(measurements);

    function sortMeasurements(keyA, keyB) {
        const [, numA, letterA = ""] = keyA.match(/^(\d+)([a-zA-Z]?)$/);
        const [, numB, letterB = ""] = keyB.match(/^(\d+)([a-zA-Z]?)$/);

        const numDiff = Number(numA) - Number(numB);
        return numDiff !== 0 ? numDiff : letterA.localeCompare(letterB);
    }

    /// Finish implementing this function next time ///
    // function updateMeasurements(side, field, value) {
    //     setMeasurements(prev => ({ ...prev, }))
    // }

    return (
        <div className="d-flex flex-row">
            <div style={{ margin: "10px" }}>
                {Object.entries(measurementList.left).sort(([keyA], [keyB]) => sortMeasurements(keyA, keyB)).map(([key, value]) => (
                    <div>
                        <p style={{ paddingLeft: "10px" }}>{key}</p>
                        <input type="text" className="form-control" id={key} onChange={(e) => { measurementList.left[key] = e.target.value; setMeasurements(measurementList); }} defaultValue={value || ""} />
                    </div>
                ))}
            </div>
            <div style={{ margin: "10px" }}>
                {Object.entries(measurementList.right).sort(([keyA], [keyB]) => sortMeasurements(keyA, keyB)).map(([key, value]) => (
                    <div>
                        <p style={{ paddingLeft: "10px" }}>{key}</p>
                        <input type="text" className="form-control" id={key} onChange={(e) => { measurementList.right[key] = e.target.value; setMeasurements(measurementList); }} defaultValue={value || ""} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export function MeasurementInfo({ from }) {
    // If `view` is `true` then the page is in view mode. If it is `false` then is it in edit mode
    const [view, setView] = React.useState(from != "login");
    const [measurements, setMeasurements] = React.useState(null);
    const navigate = useNavigate();

    async function saveInfo() {
        if (!view) {
            const response = await fetch("/api/user/measurementInfo", {
                method: "PATCH",
                body: JSON.stringify([
                    {
                        "op": "replace",
                        "path": "/measurements",
                        "value": measurements
                    }
                ]),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                credentials: "include"
            });
            
            const body = await response.json();
            console.log(body.msg);
        }

        setView(!view);
        if (from == "login") navigate("/profile");
    }

    useEffect(() => {
        async function getMeasurements() {
            const response = await fetch("/api/user/measurementInfo", {
                credentials: "include"
            });

            const body = await response.json();
            setMeasurements(body.measurements);
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
                {view && measurements && <ViewMeasurements measurements={measurements} />}
                {!view && measurements && <EditMeasurements measurements={measurements} setMeasurements={setMeasurements} />}
                <div className="d-flex flex-column justify-content-center" style={{ width: "fit-content", margin: "auto", marginBottom: "10px" }}>
                    {!view && <Button className="btn btn-primary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }} onClick={() => saveInfo()}>{from == "login" ? "Complete" : "Save"}</Button>}
                    {from != "login" && <Button className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }} onClick={() => setView(!view)}>{view ? "Edit" : "Cancel"}</Button>}
                    {view && from != "login" && <NavLink className="btn btn-secondary form-control" style={{ width: "fit-content", margin: "auto", marginTop: "10px" }} to="/profile">Back</NavLink>}
                </div>
            </div>
        </main>
    );
}