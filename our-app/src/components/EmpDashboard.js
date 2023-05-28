import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./../css/Sidebar.css";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbFileTime } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdTimeToLeave } from "react-icons/md";

const EmpDashboard = () => {
  const usertoken= localStorage.getItem('usertoken');
  const employee= localStorage.getItem('employee');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usertoken) {
   navigate("/userlogin");
    }
  });

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
        <center>
         <h2 className='fw-bold p-4' style={{color:"#f10086"}}>My Dashboard</h2>
         </center>
        </div>
        <div>
          
           <div class="container py-5 h-100">
             <div class="row d-flex justify-content-center align-items-center h-130">
               <div class="col col-xl-12">
                 <div class="card" style={{borderradius: "1rem"}}>
                   <div class="row g-0">
                     <div class="col-md-6 col-lg-6 d-none d-md-block">
                       <img src="2.jpg"
                         alt="login form" class="img-fluid" style={{borderradius: "1rem 0 0 1rem", height: "100%", width: "100%"}} />
                        </div>
                     <div class="col-md-6 col-lg-6 d-flex align-items-center">
                       <div class="card-body p-4 p-lg-5 text-black">
         
                         <form>
                         
                           <div class="d-flex align-items-center mb-3 pb-1">
                             {/* <i class="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                             <span class="h1 fw-bold mb-0">Logo</span> */}
                             <img class="logo" src="/logo.png" alt="" style={{height:"70px"}}/>
                            </div>
                          
         
                           <div class="form-outline mb-4">
                           <div class="d-grid gap-4">
                           
                           <a class="btn btn-change6 p-2 " type="button" href="/EmpSalaryReport" style={{backgroundColor: "#4c3cc8", color:"white"}}>My Salary</a>
                       
                           <a class="btn btn-change6 p-2" type="button" href="/AddLeave" style={{backgroundColor: "#4c3cc8", color:"white"}}>Apply Leave</a>
                          
                           <a class="btn btn-change6 p-2" type="button" href="/EmpLeaveReport" style={{backgroundColor: "#4c3cc8", color:"white"}}>My Leave</a>
                           <a class="btn btn-change6 p-2" type="button" href="/UserProfile" style={{backgroundColor: "#4c3cc8", color:"white"}}>My Account</a>
                           <a class="btn btn-change6 p-2" type="button" href="/Attendance" style={{backgroundColor: "#4c3cc8", color:"white"}}>Attendance</a>
                         
                         </div>
                           </div>
                         </form>
         
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        
        </div>
    </main>
  );
};

export default EmpDashboard;
