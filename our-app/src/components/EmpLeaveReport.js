import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import{BsSearch} from "react-icons/bs";
import "./../css/Sidebar.css";
import "./../css/LeaveReport.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useNavigate} from "react-router-dom";
import axios from "axios";
import Pagination from 'react-bootstrap/Pagination';
import { MdLogout } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbFileTime } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdTimeToLeave } from "react-icons/md";

let active = 4;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}



const EmpLeaveReport = () => {
  const [show, setShow] = useState(false);
  // const{id}=useParams();
  const [leaveDetails,setLeaveDetails] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const employee= localStorage.getItem('employee');

  function authHeader() {
    const token = localStorage.getItem("usertoken");
    return token;
  }

  const fetchData = async () => {
    let employee = localStorage.getItem("employee");
    let id
     if(employee && JSON.parse(employee) instanceof Object){
      employee = JSON.parse(employee)
      if(employee.hasOwnProperty("_id")){
        id = employee._id
      }
     }
    const response = await fetch(`http://localhost:5000/myleave/${id}`);
    const data = await response.json();
    console.log("data",data)
    setLeaveDetails(data);
  };
 

useEffect(() => {
  fetchData();
}, []);

const handleLogout = () => {
  localStorage.clear();
  navigate("/userlogin");
};


useEffect(() => {
  if (!localStorage.getItem("usertoken")) {
 navigate("/userlogin");
  }
});
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
      <br></br>
      <Container>
     <Row>
     <Col xs={12} md={12}>
     <center>
     <h2 className='fw-bold p-4' style={{color:"#f10086", fontSize:"40px"}}>Employee Leave Report</h2></center>
     </Col>
     </Row>

     <Row>
       
       <Col xs={12} md={6}>
       <div className="form-group has-search">
       {/* <span className="fa fa-search form-control-feedback"></span> */}
       <input type="text" className="form-control" placeholder="Search EMP ID" onChange={(e)=> setSearch(e.target.value)} />
     </div>
      </Col>
     </Row>

     
   <br></br>
     <Row>
       <Col xs={12} md={12}>
       <Table striped bordered hover size="lg" responsive="md" style={{ width: "100%"}}>
      <thead style={{backgroundColor: "#4c3cc8", color: "white"}}>   
        <tr>
          <th>Emp ID</th>
          <th>Emp Name</th>
          <th>Email Id</th>
          <th>Leave Status</th>
          <th>Reason</th>
          <th>From Date</th>
          <th>To Date</th>
        
        </tr>
      </thead>
      

      <tbody className="bg-light" >
      {leaveDetails && 
        leaveDetails.filter((data)=>{
          return search.toLowerCase()=== '' ? data : data.EmpId.toLowerCase().includes(search)
        
        }).map((data,index)=> (
          <tr key={index}  class = {index % 2 !== 0 ? "odd-row" : "even-row"}>
            <td>{data.EmpId}</td>
            <td>{data.EmpName}</td>
            <td>{data.EmailId}</td>
            <td>{data.LeaveStatus}</td>
            <td>{data.Reason}</td>
            <td>{data.FromDate}</td>
            <td>{data.ToDate}</td>
            
            </tr>
        ))}
        </tbody>
    </Table>
    <div>
    <Pagination size="sm">{items}</Pagination>
  </div>
       </Col>
    
     </Row>
 
   </Container>
   </div>
            
    </main>
  );
};

export default EmpLeaveReport;
