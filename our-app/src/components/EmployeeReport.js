
import React from 'react';
import { Form, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import{BsSearch} from "react-icons/bs";
import "./../css/Sidebar.css";
import "./../css/EmployeeReport.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useNavigate} from "react-router-dom";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import Pagination from 'react-bootstrap/Pagination';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { RiProfileFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { TbFileReport } from "react-icons/tb";
import Stack from 'react-bootstrap/Stack';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}






const EmployeeReport = () => {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [userDetails, setUser] = useState();
  const navigate = useNavigate();

  const user= localStorage.getItem('payload');
function authHeader() {
  const token = localStorage.getItem("token");
  
  return token;
}
useEffect(() => {
  if (!localStorage.getItem("token")) {
 navigate("/login");
  }
});

// async function fetchData() {
//   try {
//      await axios.get("http://localhost:5000/list", {
//       headers: {
        
//         Authorization: `Bearer ${authHeader()} `,
//         'Content-Type': 'application/json'
//       }
//     })
//     .then((response) =>
//     {
//      console.log(response.data.data);
//      setUser(response.data.data);
//     }) ;
  


//     // if (!response.ok) {
//     //   throw new Error(`Error! status: ${response.status}`);
//     // }

//     //  const result = await response.json();
//     // return result;
//   } catch (err) {
//     console.log(err);
//   }

// }
 const fetchData = () => {
    return  fetch('http://localhost:5000/list')
      .then((response) => response.json())
      .then((data) => setUser(data))

  };




const deletedata =(id)=>{
axios.delete(`http://localhost:5000/delete/${id}`)
alert("Deleted");
window.location.reload(false);
navigate('/EmployeeReport');
}

useEffect(() => {
  fetchData();
}, []);


const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

const moveLocation=()=>{
  navigate("/AddEmployee")
}

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
     <h2 className='fw-bold p-4' style={{color:"#f10086", fontSize:"40px"}}>Employee Report</h2></center>
     </Col>
     </Row>

     <Row>
       <Col xs={12} md={6}>
       <Button variant="primary" size="lg" style={{padding:"15px 80px", backgroundColor: "#4c3cc8"}} onClick={moveLocation}>Add Employee</Button>
       </Col>
      {/* <Col xs={12} md={6}>
      <Form>
        <InputGroup className='my-3'>
          <Form.Control onChange={(e)=> setSearch(e.target.value)} placeholder="Search Here"></Form.Control>
        </InputGroup>
      </Form>

      </Col> */}
       <Col xs={12} md={6}>
       <div className="form-group has-search">
       {/* <span className="fa fa-search form-control-feedback"></span> */}
       <input type="text" className="form-control" placeholder="Search" onChange={(e)=> setSearch(e.target.value)} />
     </div>
      </Col>
     </Row>
   <br></br>
     <Row>
       <Col xs={12} md={12}>
       <Card >
         
       <Table striped bordered hover size="lg" responsive="md" style={{ width: "100%"}}>
      <thead style={{backgroundColor: "#4c3cc8", color: "white", textAlign:"center"}}>   
        <tr>
        {/* <th>Id</th> */}
          <th>Employee_ID</th>
          <th>Full Name</th>
          <th>E-mail</th>
          <th>Mobile No</th>
          <th>Address</th>
          <th>Date Of Joining</th>
          <th>Gendar</th>
          <th>DOB</th>
          <th>Department</th>
          <th>Nationality</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="bg-light" >
      {userDetails && 
        userDetails.filter((data)=>{
          return search.toLowerCase()=== '' ? data : data.UserId.toLowerCase().includes(search)
        
        }).map((data,index)=> (
          <tr key={index} className = {index % 2 !== 0 ? "odd-row" : "even-row"}>
          {/* <td>{data._id}</td> */}
          <td>{data.UserId}</td>
          <td>{data.FullName}</td>
          <td>{data.EmailId}</td>
          <td>{data.MobileNo}</td>
            <td>{data.Address}</td>
            <td>{data.DateOfJoining}</td>
            <td>{data.Gender}</td>
            <td>{data.DateOfBirth}</td>
            <td>{data.Department}</td>
          <td>{data.Nationality}</td>
            <td>
            <Stack direction="horizontal" gap={1}>
             <Link className='btn btn-success' to={`/editemployee/${data._id}`} style={{padding:"5px 20px"}}>Edit</Link>
           
            {/* <button type="button" className="btn btn-success" style={{padding:"5px 10px"}}  onClick={()=>{updatedata(data._id)}}>Edit</button> */}
             <button type="button" className="btn btn-danger" style={{padding:"5px 10px"}}  onClick={()=>{deletedata(data._id)}}>Delete</button>
             </Stack>
            </td>
          </tr>
        ))}
    </tbody>
    </Table>
   
    </Card>
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

export default EmployeeReport;