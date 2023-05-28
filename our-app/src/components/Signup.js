import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/Signup.css';

const Register = () => {
  const navigate = useNavigate();
  const [UserId, idchange] = useState("");
  const [FullName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [EmailId, emailchange] = useState("");
  const [MobileNo, phonechange] = useState("");
  const [Address, addresschange] = useState("");
  const [DateOfJoining, joiningchange] = useState("");
  const [Gender, genderchange] = useState("");
  const [DateOfBirth, birthchange] = useState("");
  const [Department, deptchange] = useState("");
  const [Nationality, nationalitychange] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/dashboard", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => navigate("/logintrial"))
      .catch((err) => {
        navigate("/signup");
      });
  }, []);

  const handleRegister = () => {
    axios
      .post("http://localhost:5000/register", { FullName, password })
      .then(() => {
        alert("user is registered");
        // navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("user is not registered");
        // navigate("/Login");
      });
  };

  return (
    <div>
      <h2 className="head">Register Page</h2>
      <input
        className="UserId"
        type="text"
        placeholder="User Id"
        value={UserId}
        onChange={(e) => {
          idchange(e.target.value);
        }}
        required
      />
      <input
        className="name"
        type="text"
        placeholder="Username"
        value={FullName}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />
      <input
        className="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
       <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={EmailId} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={MobileNo} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input value={Address} onChange={e=>addresschange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>DateOfJoining</label>
                                        <input value={DateOfJoining} onChange={e=>joiningchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input value={Gender} onChange={e=>genderchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>DateOfBirth</label>
                                        <input value={DateOfBirth} onChange={e=>birthchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <input value={Department} onChange={e=>deptchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Nationality</label>
                                        <input value={Nationality} onChange={e=>nationalitychange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

      <button type="submit" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
