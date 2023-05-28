import React, { useState,useRef, useEffect} from 'react'
import { Form } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./../css/Sidebar.css";
import { useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { MdLogout } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbFileTime } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdTimeToLeave } from "react-icons/md";

export default function Attendance() {
    let date= new Date().toLocaleDateString();
    let time= new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime]=useState(time);

    const UpdateTime =()=>{
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };
    setInterval(UpdateTime,1000);
     const [timeData, setTimeData] = useState();
     const [dateData, setDateData] = useState();
    const ref = useRef(null);

    const[UserId,idchange]=useState("");
    const[FullName,namechange]=useState("");
    const[password,passwordchange]=useState("");
    const token= localStorage.getItem('usertoken');
    const employee= localStorage.getItem('employee');
    
    const [show, setShow] = useState(false);
     const dateInputRef = useRef(null);
    const navigate = useNavigate();
    function authHeader() {
      const token = localStorage.getItem("usertoken");
      const employee = localStorage.getItem("employee");

      return token;
    }
    const submitData = (e) => {
       e.preventDefault();
        const Attendence = { UserId, FullName,date,currentTime};
    
        fetch("http://localhost:5000/addattendance", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(Attendence),
        }).then((response) => {
          alert("Attendence Successfull")
           navigate("/UserProfile")
        });
      }
    
    useEffect(() => {
      if (!localStorage.getItem("usertoken")) {
     navigate("/userlogin");
      }
    });
    useEffect(()=>{
      getUserDetails();
    },[])
    const getUserDetails= async()=>{
  
      let result = await fetch("http://localhost:5000/userlogin", {
          method: "GET",
          body: JSON.stringify({ FullName, password }),
          headers: {
              "Content-Type": 'application/json'
          }
      });
      result = await result.json()
      console.warn(result);
     if(result.FullName){
      localStorage.setItem("employee",JSON.stringify(result))
      navigate('/empdashboard')
     }else{
      alert("Please Enter correct details");
     }
  }
  const [fullName, setFullName]=useState(JSON.parse(employee).FullName);
  const [userId, setUserId]=useState(JSON.parse(employee).UserId);

  const handleLogout = () => {
    localStorage.clear("");
    navigate("/userlogin");
  };

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>

        
        <Link to='/' className='nav-link'>
        <MdLogout style={{color:"#4c3cc8", fontSize:"18px",marginTop:"22px"}}></MdLogout>
        <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout(Employee)</span>
            {/* <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout({JSON.parse(employee).FullName})</span> */}
          </Link>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav' style={{backgroundColor: "#4c3cc8"}}>
        
          <div>
          <Link to='/' className='nav-logo'>
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Logo</span> */}
              <img class="logo" src="/logo.png" alt="" style={{height:"70px"}}/>
            </Link>

            <div className='nav-list'>
              <Link to='/EmpDashboard' className='nav-link active'>
              <MdOutlineSpaceDashboard style={{fontSize: "1.3rem"}}></MdOutlineSpaceDashboard>
                <span className='nav-link-name'>My Dashboard</span>
              </Link>
              <Link to='/EmpSalaryReport' className='nav-link'>
                <GiReceiveMoney style={{fontSize: "1.3rem"}}></GiReceiveMoney>
                <span className='nav-link-name'>My Salary</span>
              </Link>
              <Link to='/AddLeave' className='nav-link'>
                <TbFileTime style={{fontSize: "1.3rem"}}></TbFileTime>
                <span className='nav-link-name'>Apply Leave</span>
              </Link>
              <Link to='/EmpLeaveReport' className='nav-link'>
                <MdTimeToLeave style={{fontSize: "1.3rem"}}></MdTimeToLeave>
                <span className='nav-link-name'>My Leave</span>
              </Link>
              <Link to='/UserProfile' className='nav-link'>
              <RiProfileFill style={{fontSize: "1.3rem"}}></RiProfileFill>
              <span className='nav-link-name'>My Profile</span>
            </Link>
            <Link to='/Attendance' className='nav-link'>
            <MdCoPresent style={{fontSize: "1.3rem"}}></MdCoPresent>
            <span className='nav-link-name'>Attendance</span>
          </Link>
          
         
            </div>
          </div>

        </nav>
      </aside>
    <div>
    <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
           
            <div className="col-12 col-lg-9 col-xl-11">
              <div class="card shadow-2-strong card-registration shadow px-4" style={{borderradius: "1rem"}}>
              <div className="card-body p-4 p-md-5">
      
                      <form class="container">
                       
                       <div class="col-sm">
                        <div class="d-flex align-items mb-3 pb-1">
                          <center>
                          <h1 class="h1 fw-bold mb-0" style={{color:"#f10086", fontSize:"30px"}}>Attendance Time</h1>
                          </center>
                        </div>
                        </div>

                        <div class="row">
                        <div class="col-sm">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example17" style={{fontSize: "17px"}} >User Id</label>
                          <input type="text" id="getuserId" name="getuserId" class="form-control form-control-lg" value={userId}onChange={e=>idchange(e.target.value)}
                          disabled/>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example17" style={{fontSize: "17px"}} >Confirm User Id</label>
                          <input type="text" id="UserId" name="UserId" class="form-control form-control-lg" value={UserId}onChange={e=>idchange(e.target.value)}
                           />
                        </div>
                        </div>
                        
                        {/* <div class="col-sm">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example17" style={{fontSize: "17px"}}>Employee Name</label>
                          <input type="text" id="FullName" name="FullName" class="form-control form-control-lg" value={FullName}  onChange={e=>namechange(e.target.value)}
                          
                           />
                        </div>
                        </div> */}
                        
                        <div class="col-sm">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example17" style={{fontSize: "17px"}}>In Time</label>
                          <input type="text" id="inTime" name="inTime" class="form-control form-control-lg" onChange={event => setTimeData(event.target.value)}
                          value={currentTime} 
                          disabled/>
                        </div>
                        </div>
                        
                        <div class="col-sm">
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example27" style={{fontSize: "17px"}}>Today's Date</label>
                          <input type="text" id="inDate" name="inDate"class="form-control form-control-lg" 
                          onChange={(e)=>setDateData(e.target.value)}
                          ref={ref}
                          value={date}
                          disabled/> 
                        </div>
                        </div>
                        </div>
                       
                        
                   
                        
      
                        <div class="pt-1 mb-4">
                          <center><button class="btn btn-dark btn-lg btn-block float-sm-right" type="button" style={{backgroundColor: "#4f3eca"}} onClick={submitData}>Submit</button></center>
                        </div>
                        
      
             
                       
                      </form>
      
                    {/* </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* <input
        value={currentTime}
        ref={ref}
      
      />


   
      <button onClick={handleClick}>Click</button> */}
    </div>
    </main>
  )
}
