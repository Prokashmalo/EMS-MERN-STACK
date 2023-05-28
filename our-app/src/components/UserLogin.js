import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/Signup.css';

const Login = () => {
  const navigate = useNavigate();
  const [UserId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const usertoken = localStorage.getItem("usertoken");
    const employee = localStorage.getItem("employee");
    axios
      .get("http://localhost:5000/empdashboard", {
        headers: {
          Authorization: usertoken,
        },
      })
      .then((res) => navigate("/"))
      .catch((err) => {
        navigate("/UserLogin");
      });
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/userlogin", { UserId, password })
      .then((user) => {
        localStorage.setItem("usertoken", user.data.usertoken);
        localStorage.setItem("employee", JSON.stringify(user.data.employee));

        alert("Employee is successfully logged in");
        navigate("/empdashboard");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Username or Password");
        navigate("/userlogin");
      });
  };

  return (

    <section class="vh-100" style={{ background: "linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-11">
            <div class="card" style={{ borderradius: "1rem" }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-6 d-none d-md-block">
                  <img src="2.jpg"
                    alt="login form" class="img-fluid" style={{ borderradius: "1rem 0 0 1rem", height: "100%", width: "100%" }} />
                </div>
                <div class="col-md-6 col-lg-6 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">

                    <form>

                      <div class="d-flex align-items-center mb-3 pb-1">
                        <img class="logo" src="/logo.png" alt="" style={{ height: "70px", marginBottom: "20px" }} />

                      </div>
                      <center>
                        <h2 class="fw-normal mb-1 pb-3" style={{ color: "#B20DEE", fontWeight: "bold" }}>Employee Login</h2>
                      </center>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example17" style={{ fontSize: "20px" }}>User Id</label>
                        <input type="text" id="UserId" class="form-control form-control-lg" onChange={(e) => setUserId(e.target.value)}
                          value={UserId} placeholder="Enter Your User Id"/>

                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example27" style={{ fontSize: "20px" }}>Password</label>
                        <input type="password" id="form2Example27" class="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password} placeholder="Enter Your Password"/>

                      </div>

                      <div class="pt-1 mb-4">
                        <button class="btn btn-dark btn-lg btn-block" type="button" style={{ backgroundColor: "#4f3eca" , padding:"10px 60px"}} onClick={handleLogin}>Login</button>
                      </div>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login;