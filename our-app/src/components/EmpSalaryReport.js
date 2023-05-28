import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./../css/Sidebar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./../css/AddEmployee.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { MdLogout } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbFileTime } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdTimeToLeave } from "react-icons/md";

const EmpsalaryReport = () => {
    const token= localStorage.getItem('usertoken');
    const employee= localStorage.getItem('employee');

    const [show, setShow] = useState(false);
   
    const[UserId,idchange]=useState("");
    const[FullName,namechange]=useState("");
    const[password,passchange]=useState("");
    const[MobileNo,phonechange]=useState("");
    const[BasicSalary,basicchange]=useState("");
    const[HRA,hrachange]=useState("");
    const[TravelAllowance,travelchange]=useState("");
    const[DearnessAllowance,dearnesschange]=useState("");
    const[ConveyanceAllowance,conveychange]=useState("");
    const[ProvidentFund,providchange]=useState("");
    const[TotalTax,taxchange]=useState("");
    const[Month,monthchange]=useState("");
    const[TotalPaid,totalpaidchange]=useState("");

    const { id } = useParams();
    const navigate = useNavigate();

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
  const handleLogout = () => {
    localStorage.clear("");
    navigate("/userlogin");
  };
  

//   const handlesubmit= async()=>{
//    console.warn(UserId,FullName,EmailId,MobileNo,Address,DateOfJoining,Gender,DateOfBirth,Department,Nationality);
//    let result =  fetch(`http://localhost:5000/adminprofile/${id}`,{
//        method:'PUT',
//        body: JSON.stringify({UserId,FullName,EmailId,MobileNo,Address,DateOfJoining,Gender,DateOfBirth,Department,Nationality}),
//        headers:{
//         'Content-Type':'Application/json'
//        }
     
// });
// result = await result.json();
// if(result){
//     navigate('/dashboard');
// }

// }


    return ( 
        <main>
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
         {/* <div > */}

        <div className="row ">
            <div className="offset-lg-2 col-lg-9">
            <div class="container mt-5 mb-5">
    <div class="row">
        <div class="col-md-12">
            <div class="text-center lh-1 mb-1">
                <h2 class="fw-bold p-4" style={{color:"#f10086"}}>Payslip</h2> <span class="fw-normal">Payment Slip for the Month of {JSON.parse(employee).Month} 2023</span>
            </div>
            <div class="d-flex justify-content-end"> <span>Working Branch:Kolkata</span> </div>
            <div class="row">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">EMP User Id</span> <small class="ms-3">{JSON.parse(employee).UserId}</small> </div>
                        </div>
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">EMP Name</span> <small class="ms-3"> {JSON.parse(employee).FullName}</small> </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Email Id</span> <small class="ms-3">{JSON.parse(employee).EmailId}</small> </div>
                        </div>
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Mobile Number</span> <small class="ms-3">{JSON.parse(employee).MobileNo}</small> </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Bank Account No.</span> <small class="ms-3"></small>487600231243</div>
                        </div>
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">IFSC Code</span> <small class="ms-3">CHRAN02356</small> </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Designation</span> <small class="ms-3">{JSON.parse(employee).Department}</small> </div>
                        </div>
                        <div class="col-md-6">
                            <div> <span class="fw-bolder">Bank Name</span> <small class="ms-3">State Bank Of India</small> </div>
                        </div>
                    </div>
                </div>
                <table class="mt-4 table table-bordered">
                    <thead class=" text-white" style={{backgroundColor: "#4c3cc8", color: "white", textAlign:"center"}}>
                        <tr>
                            <th scope="col">Earnings</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Deductions</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Basic Salary</th>
                            <td>{JSON.parse(employee).BasicSalary}</td>
                            <th scope="row">Provident Fund</th>
                            <td>{JSON.parse(employee).ProvidentFund}</td>
                        </tr>
                        <tr>
                            <th scope="row">HRA</th>
                            <td>{JSON.parse(employee).HRA}</td>
                            <th scope="row">Total Tax</th>
                            <td>{JSON.parse(employee).TotalTax}</td>
                        </tr>
                        <tr>
                            <th scope="row">Travel Allowance</th>
                            <td>{JSON.parse(employee).TravelAllowance}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Dearness Allowance</th>
                            <td>{JSON.parse(employee).DearnessAllowance}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Conveyance Allowance</th>
                            <td>{JSON.parse(employee).ConveyanceAllowance}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        
                        
                        {/* <tr class="border-top">
                            <th scope="row">Total Earning</th>
                            <td>25970.00</td>
                            <td>Total Deductions</td>
                            <td>2442.00</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-md-4"> <br/> <span class="fw-bold">Total Paid : {JSON.parse(employee).TotalPaid}</span> </div>
                <div class=" col-md-8">
                <div class="d-flex justify-content-end">
                <div class="d-flex flex-column mt-2"> <span class="fw-bolder">For Spr</span>Trayee Ghosh<span class="mt-2 fw-bolder" >Authorised Signatory</span> </div>
            </div> 
                </div>
            </div>
            
        </div>
    </div>
</div>
            </div>
        </div>
    {/* </div> */}
 
    </main>
     );
}
 
export default EmpsalaryReport;