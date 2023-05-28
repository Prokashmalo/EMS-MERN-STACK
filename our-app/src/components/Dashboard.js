import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Login from './Login';
import "./../css/Sidebar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useDispatch,useSelector } from 'react-redux';
// import {BiLogOut} from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import Container from 'react-bootstrap/esm/Container';
import { RiProfileFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { TbFileReport } from "react-icons/tb";


const Sidebar = () => {
  const token = localStorage.getItem('token');

  const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get("http://localhost:5000/dashboard", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => {
  //       navigate("/login");
  //     });
  // }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

  });
  const user = localStorage.getItem('payload');


  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>

        <Link to='/' className='nav-link'>
          <MdLogout style={{ color: "#4c3cc8", fontSize: "18px", marginTop: "22px" }}></MdLogout>
          <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout(Admin)</span>
          {/* <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout({JSON.parse(user).FullName})</span> */}
        </Link>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav' style={{ backgroundColor: "#4c3cc8" }}>

          <div>
            <Link to='/' className='nav-logo'>
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
              <img class="logo" src="/logo.png" alt="" style={{ height: "70px" }} />
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                {/* <i className='fas fa-tachometer-alt nav-link-icon'></i> */}
                <MdOutlineSpaceDashboard style={{ fontSize: "1.3rem" }}></MdOutlineSpaceDashboard>
                <span className='nav-link-name'>Dashboard</span>
              </Link>

              <Link to='/EmployeeReport' className='nav-link'>
                {/* <i className='fas fa-hotel nav-link-icon'></i> */}
                <TbFileReport style={{ fontSize: "1.3rem" }}></TbFileReport>
                <span className='nav-link-name'>Employee Report</span>
              </Link>

              <Link to='/AddEmployee' className='nav-link'>
                {/* <i className='fas fa-image nav-link-icon'></i> */}
                <BsPersonAdd style={{ fontSize: "1.3rem" }}></BsPersonAdd>
                <span className='nav-link-name'>Add Employee</span>
              </Link>
              <Link to='/SalaryReport' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <TbReportMoney style={{ fontSize: "1.3rem" }}></TbReportMoney>
                <span className='nav-link-name'>Salary Report</span>
              </Link>
              <Link to='/LeaveReport' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <TbReportAnalytics style={{ fontSize: "1.3rem" }}></TbReportAnalytics>
                <span className='nav-link-name'>Leave Report</span>
              </Link>
              {/* <Link to='/AddLeave' className='nav-link'>
          <i className='fas fa-dollar-sign nav-link-icon'></i>
          <span className='nav-link-name'>Add Leave</span>
        </Link> */}
              <Link to='/AttendanceSheetReport' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <TbReport style={{ fontSize: "1.3rem" }}></TbReport>
                <span className='nav-link-name'>Attendance Report</span>
              </Link>
              <Link to='/AdminProfile' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <RiProfileFill style={{ fontSize: "1.3rem" }}></RiProfileFill>
                <span className='nav-link-name'>My Profile</span>
              </Link>

              {/* <Link to='/' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name' onClick={handleLogout} style={{color:"#fff"}}>Logout({JSON.parse(user).FullName})</span>
          </Link> */}
            </div>
          </div>
        </nav>
      </aside>

      <div>
        <center>
          <h2 style={{ color: "#f10086", fontWeight: "bold" }}>Employee Leave And Payroll System Admin Dashboard</h2>
        </center>
      </div>
      <div>
        <Container>

          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-130">
              <div class="col col-xl-11">
                <div class="card" style={{ borderradius: "5rem" }}>
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-6 d-none d-md-block">
                      <img src="2.jpg"
                        alt="login form" class="img-fluid" style={{ borderradius: "1rem 0 0 1rem", height: "100%", width: "100%" }} />
                    </div>
                    <div class="col-md-6 col-lg-6 d-flex align-items-center">
                      <div class="card-body p-4 p-lg-5 text-black">

                        <form>

                          <div class="d-flex align-items-center mb-3 pb-1">
                            <img class="logo" src="/logo.png" alt="" style={{ height: "70px" }} />

                          </div>


                          <div class="form-outline mb-4">
                            <div class="d-grid gap-4">


                              <a href="/AddEmployee" class="btn btn-change6 p-2" type="button" style={{ backgroundColor: "#4c3cc8", color: "white" }}>Add Employee</a>

                              <a href="/EmployeeReport" class="btn btn-change6 p-2" type="button" style={{ backgroundColor: "#4c3cc8", color: "white" }}>Employee Report</a>

                              <a href="/Adminprofile" class="btn btn-change6 p-2" type="button" style={{ backgroundColor: "#4c3cc8", color: "white" }}>My Profile</a>
                              <a href="/SalaryReport" class="btn btn-change6 p-2" type="button" style={{ backgroundColor: "#4c3cc8", color: "white" }}>Salary Report</a>
                              <a href="/LeaveReport" class="btn btn-change6 p-2" type="button" style={{ backgroundColor: "#4c3cc8", color: "white" }}>Leave Report</a>
                              <a href="/AttendanceSheetReport" class="btn btn-change6 p-2" type="button" style={{ backgroundColor: "#4c3cc8", color: "white" }}>Attendance Report</a>


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
        </Container>


      </div>
    </main>
  );
};

export default Sidebar;
