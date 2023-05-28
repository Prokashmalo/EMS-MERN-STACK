import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/Signup.css';

const Login = () => {
  const navigate = useNavigate();
  const [FullName, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    // const payload = localStorage.getItem("payload");
    axios
      .get("http://localhost:5000/dashboard", {
        headers: {
          Authorization: token,
          
        },
      })
      .then((res) => navigate("/dashboard"))
      .catch((err) => {
        navigate("/login");
      });
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/login", { FullName, password })
      .then((user) => {
        localStorage.setItem("token", JSON.stringify(user.data.token));
        localStorage.setItem("payload", JSON.stringify(user.data.user));
        alert("Admin is successfully logged in");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Username or Password");
        navigate("/login");
      });
    
  };

  //   useEffect(()=>{
  //     const auth = localStorage.getItem('user');
  //        axios
  //         .get("http://localhost:5000/dashboard", {
  //           headers: {
  //             Authorization: auth,
              
  //           },
  //         })
  //         .then((res) => navigate("/dashboard"))
  //         .catch((err) => {
  //           navigate("/login");
  //         });
  // },[])

  // const handleLogin = async () => {
  //     let result = await fetch("http://localhost:5000/login", {
  //         method: "POST",
  //         body: JSON.stringify({ FullName, password }),
  //         headers: {
  //             "Content-Type": 'application/json'
  //         }
  //     });
  //     result = await result.json()
  //     console.warn(result);
  //    if(result.FullName){
  //     localStorage.setItem("user",JSON.stringify(result))
  //     navigate('/dashboard')
  //    }else{
  //     alert("Please Enter correct details");
  //    }
  // }
  

  return (

<section class="vh-100" style={{background: "rgb(255,255,255)" , background: "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)"}}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-11">
              <div class="card" style={{borderradius: "1rem"}}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-6 d-none d-md-block">
                    <img src="2.jpg"
                      alt="login form" class="img-fluid" style={{borderradius: "1rem 0 0 1rem", height: "100%", width: "100%"}} />
                  </div>
                  <div class="col-md-6 col-lg-6 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
      
                      <form>
      
                        <div class="d-flex align-items-center mb-1 ">
                        <img class="logo" src="/logo.png" alt="" style={{height:"70px", marginBottom:"20px"}}/>

                        </div>
                        <center>
                        <h2 class="fw-normal mb-1 pb-3" style={{ color:"#B20DEE" , fontWeight:"bold" }}>Admin Login</h2>
                        </center>
      
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example17" style={{fontSize: "20px"}}>User Name</label>
                          <input type="text" id="name" class="form-control form-control-lg" onChange={(e)=>setName(e.target.value)}
                          value={FullName}  placeholder="Enter Your User Name"/>
                         
                        </div>
      
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27" style={{fontSize: "20px"}} >Password</label>
                          <input type="password" id="form2Example27" class="form-control form-control-lg" 
                          onChange={(e)=>setPassword(e.target.value)}
                          value={password} placeholder="Enter Your Password"/>
                          
                        </div>
      
                        <div class="pt-1 mb-4">
                          <button class="btn btn-dark btn-lg btn-block" type="button" style={{backgroundColor: "#B20DEE" , padding:"10px 60px"}} onClick={handleLogin}>Login</button>
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