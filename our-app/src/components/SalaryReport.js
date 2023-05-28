import React, { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import "./../css/Sidebar.css";
import "./../css/SalaryReport.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import { MdLogout } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { TbFileReport } from "react-icons/tb";


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}



const EmployeeSalaryReport = () => {
  const token= localStorage.getItem('token');
  const user= localStorage.getItem('payload');

  const [show, setShow] = useState(false);
  const [userSalaryDetails, setUser] = useState([]);
  const [search, setSearch] = useState('');
  const navigate= useNavigate();

  useEffect(() => {
    if (!token) {
   navigate("/login");
    }
  });

 const fetchData = () => {
  return  fetch("http://localhost:5000/list")
    .then((response) => response.json())
    .then((data) => setUser(data))

};

// let result = await fetch("http://localhost:5000/salaryreport", {
//         method: "GET",
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


const deletedata =(id)=>{
  axios.delete(`http://localhost:5000/deletesal/${id}`)
  alert("Deleted");
  window.location.reload(false);
  navigate('/SalaryReport');
  }

useEffect(() => {
  fetchData();
}, []);
const moveLocation=()=>{
  navigate("/AddSalary")
}



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
          <MdLogout style={{color:"#4c3cc8", fontSize:"18px",marginTop:"22px"}}></MdLogout>
          <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout(Admin)</span>
            {/* <span className='nav-link-name' style={{color:"#4c3cc8", fontSize:"18px",marginTop:"20px"}} onClick={handleLogout}>Logout({JSON.parse(user).FullName})</span> */}
          </Link>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav' style={{backgroundColor: "#4c3cc8"}}>
        
          <div>
            <Link to='/' className='nav-logo'>
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
              <img class="logo" src="/logo.png" alt="" style={{height:"70px"}}/>
            </Link>

            <div className='nav-list'>
            <Link to='/dashboard' className='nav-link active'>
                {/* <i className='fas fa-tachometer-alt nav-link-icon'></i> */}
                <MdOutlineSpaceDashboard style={{fontSize: "1.3rem"}}></MdOutlineSpaceDashboard>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              
              <Link to='/EmployeeReport' className='nav-link'>
                {/* <i className='fas fa-hotel nav-link-icon'></i> */}
                <TbFileReport style={{fontSize: "1.3rem"}}></TbFileReport>
                <span className='nav-link-name'>Employee Report</span>
              </Link>
         
              <Link to='/AddEmployee' className='nav-link'>
                {/* <i className='fas fa-image nav-link-icon'></i> */}
                <BsPersonAdd style={{fontSize: "1.3rem"}}></BsPersonAdd>
                <span className='nav-link-name'>Add Employee</span>
              </Link>
              <Link to='/SalaryReport' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <TbReportMoney style={{fontSize: "1.3rem"}}></TbReportMoney>
                <span className='nav-link-name'>Salary Report</span>
              </Link>
            <Link to='/LeaveReport' className='nav-link'>
            {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
            <TbReportAnalytics style={{fontSize: "1.3rem"}}></TbReportAnalytics>
            <span className='nav-link-name'>Leave Report</span>
          </Link>
          {/* <Link to='/AddLeave' className='nav-link'>
          <i className='fas fa-dollar-sign nav-link-icon'></i>
          <span className='nav-link-name'>Add Leave</span>
        </Link> */}
        <Link to='/AttendanceSheetReport' className='nav-link'>
          {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
          <TbReport style={{fontSize: "1.3rem"}}></TbReport>
          <span className='nav-link-name'>Attendance Report</span>
        </Link>
        <Link to='/AdminProfile' className='nav-link'>
          {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
          <RiProfileFill style={{fontSize: "1.3rem"}}></RiProfileFill>
          <span className='nav-link-name'>My Profile</span>
        </Link>
          
          {/* <Link to='/' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name' onClick={handleLogout}>Logout({JSON.parse(auth).name})</span>
          </Link> */}
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
     <h2 className='fw-bold p-4' style={{color:"#f10086", fontSize:"40px"}}>Employee Salary Report</h2></center>
     </Col>
     </Row>

     <Row>
       <Col xs={12} md={6}>
       <Button variant="primary" size="lg" style={{padding:"15px 80px", backgroundColor: "#4c3cc8"}} onClick={moveLocation}>Add Employees Salary</Button>
       </Col>
       <Col xs={12} md={6}>
       <div className="form-group has-search">
       {/* <span className="fa fa-search form-control-feedback"></span> */}
       <input type="text" className="form-control" placeholder="Search UserId" onChange={(e)=> setSearch(e.target.value)} />
     </div>
      </Col>
     </Row>
     
   <br></br>
     <Row>
       <Col xs={12} md={12}>
       <Table striped bordered hover size="lg" responsive="md" style={{ width: "100%"}}>
      <thead style={{backgroundColor: "#4c3cc8", color: "white"}}>   
        <tr>
          <th>User Id</th>
          <th>Full Name</th>
          <th>MobileNo</th>
          <th>Month</th>
          <th>BasicSalary</th>
          <th>HRA</th>
          <th>TravelAllowance</th>
          <th>DearnessAllowance</th>
          <th>ProvidentFund</th>
          <th>TotalTax</th>
          <th>TotalPaid</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody className="bg-light" >
      {userSalaryDetails && 
        userSalaryDetails.filter((data)=>{
          return search.toLowerCase()=== '' ? data : data.UserId.toLowerCase().includes(search)
        
        }).map((data,index)=> (
          <tr key={index}  class = {index % 2 !== 0 ? "odd-row" : "even-row"}>
          <td>{data.UserId}</td>
          <td>{data.FullName}</td>
          <td>{data.MobileNo}</td>
          <td>{data.Month}</td>
          <td>{data.BasicSalary}</td>
          <td>{data.HRA}</td>
          <td>{data.TravelAllowance}</td>
          <td>{data.DearnessAllowance}</td>
          
          
            <td>{data.ProvidentFund}</td>
            <td>{data.TotalTax}</td>
            <td>{data.TotalPaid}</td>
      
          <td>
          <Link className='btn btn-success' to={`/editsalary/${data._id}`}>Edit</Link>
            {/* <button type="button" className="btn btn-success" style={{padding:"5px 10px"}}  onClick={()=>{updatedata(data._id)}}>Edit</button> */}
            <button type="button" className="btn btn-danger" style={{padding:"5px 10px"}}  onClick={()=>{deletedata(data._id)}}>Delete</button>          </td>
            
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

export default EmployeeSalaryReport;
