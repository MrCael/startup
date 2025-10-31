import React from "react";
import { NavLink } from "react-router-dom";

// function UsernameAndPassword({ setLoginInfoSet }) {
//     const [setupUserName, setSetupUserName] = React.useState("");
//     const [setupPassword, setSetupPassword] = React.useState("");
//     const [confirmPassword, setConfirmPassword] = React.useState("");

//     function confirmLogin() {
//         setLoginInfoSet(true);
//     }

//     return (
//         <main>
//             <div className="d-flex flex-column justify-content-center align-items-center align-div">
//                 <div>
//                     <h1>Login Credentials</h1>
//                 </div>
//                 <div>
//                     <p className="no-margin-bottom">Username</p>
//                     <input className="form-control" type="email" onChange={(e) => setSetupUserName(e.target.value)} placeholder="your@email.com" />
//                 </div>
//                 <div>
//                     <p className="no-margin-bottom">Password</p>
//                     <input className="form-control" type="password" onChange={(e) => setSetupPassword(e.target.value)} placeholder="password" />
//                 </div>
//                 <div>
//                     <p className="no-margin-bottom">Confirm Password</p>
//                     <input className="form-control" type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="password" />
//                 </div>
//                 {setupPassword !== confirmPassword && confirmPassword !== "" && <div>
//                     <p className="error-text">Passwords must match</p>
//                 </div>}
//                 <div className="centered" style={{ marginTop: "10px" }}>
//                     <Button className="btn btn-primary form-control" onClick={() => confirmLogin()} disabled={!setupUserName || !setupPassword || setupPassword !== confirmPassword}>Submit</Button>
//                 </div>
//             </div>
//         </main>
//     );
// }

export function PersonalInfo({ from }) {
    return (
        <main>
            <div className="d-flex flex-column justify-content-center align-div">
                <table style={{marginBottom: "10px"}}>
                    <tbody>
                        <tr>
                            <td colSpan="2" className="centered">
                                <h1>Personal Information</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>First Name: <input type="text" className="form-control" /></p>
                            </td>
                            <td>
                                <p>Last Name: <input type="text" className="form-control" /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Username: <input type="text" className="form-control" /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Email: <input type="text" className="form-control" /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Phone Number: <input type="text" className="form-control" /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p>Profile Image: <input type="file" className="form-control" /></p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <label>
                                    <span><input type="checkbox" value="1" /> Opt in to recieve notifications</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <NavLink className="btn btn-primary form-control" to={from === "login" ? "/shippingInfo" : "/profile"}>{from === "login" ? "Continue" : "Save"}</NavLink>
                                {from !== "login" && <NavLink className="btn btn-secondary form-control" to="/profile">Back</NavLink>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
}

// export function PersonalInfo({ from, loginInfoSet, setLoginInfoSet }) {
//     return (
//         <>
//             {!loginInfoSet && <UsernameAndPassword setLoginInfoSet={setLoginInfoSet} />}
//             {loginInfoSet && <PersonalInfoContent from={from} />}
//         </>
//     );
// }