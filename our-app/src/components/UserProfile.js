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
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { MdLogout } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TbFileTime } from "react-icons/tb";
import { MdCoPresent } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdTimeToLeave } from "react-icons/md";
import Stack from 'react-bootstrap/Stack';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
// import "./testimonials.css";


const UserProfile = () => {
    const token= localStorage.getItem('usertoken');
    const employee= localStorage.getItem('employee');

    const [show, setShow] = useState(false);
    const [user, setUser] = useState();
    const[UserId,idchange]=useState("");
    const[FullName,namechange]=useState("");
    const[EmailId,emailchange]=useState("");
    const [password, setPassword] = useState("");
    const[MobileNo,phonechange]=useState("");
    const[Address,addresschange]=useState("");
    const[DateOfJoining,joiningchange]=useState("");
    const[Gender,genderchange]=useState("");
    const[DateOfBirth,birthchange]=useState("");
    const[Department,deptchange]=useState("");
    const[Nationality,nationalitychange]=useState("");
    const { id } = useParams();
    const navigate = useNavigate();

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


  useEffect(()=>{
    getUserDetails();
  },[])
  const getUserDetails= async()=>{

    let result = await fetch("http://localhost:5000/userlogin", {
        method: "GET",
        body: JSON.stringify({ UserId, password }),
        headers: {
            "Content-Type": 'application/json'
        }
    });
    result = await result.json()
    console.warn(result);
   if(result.UserId){
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
         <div >

         <div style={{paddingTop:"1.5%"}}>
<div className="row justify-content-center align-items-center">
<div className="col-12 col-lg-10 col-xl-9">

 <Container>
 
     <Row xs={12} sm={12}>

        <Col>
        <Card className="card shadow px-5" style={{ width: '30rem', height:"100%",  border: " 3px solid #8B008B", borderRadius: "15px" }}>
      <Card.Body >
      <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
              />
              </div>
              </MDBCard>
  <center><Card.Title style={{color: "#8B008B", fontSize: "28px" }}>My Profile</Card.Title></center><br></br>
  <center>
        <Table>
        <tbody>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>User Id</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).UserId}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Name</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).FullName}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>MobileNo</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).MobileNo}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Email-id</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).EmailId}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Address</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).Address}</td>
        </tr>
        </tbody>
    
        </Table>
        </center>
       <br></br>
        <center><a class="btn p-2" type="button" href="/EmpDashboard"  style={{backgroundColor: "#4c3cc8", border: "none", color: "white"}}>My Dashboard</a></center>
        
      </Card.Body>
    </Card>
        </Col>

       <br></br>
        
        <Col>
          <Container>
          <Row xs={12} sm={12}>
        <Col>
        <Card className="card shadow px-5" style={{ width: '30rem', height:"100%",  border: " 3px solid #8B008B", borderRadius: "15px"}}>
      <Card.Body>
      <center><Card.Title style={{color: "#8B008B", fontSize: "28px" }}>Personal Details</Card.Title></center><br></br>
      <center>
        <Table>
        <tbody>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>DateOfJoining</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).DateOfJoining}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Gender</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).Gender}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>DateOfBirth</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).DateOfBirth}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Department</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).Department}</td>
        </tr>
        <tr style={{backgroundColor: "White", borderBlockEnd: "1px solid #8B008B", fontSize: "15px", color: "black"}}>
          <td style={{width: "50%"}}>Nationality</td>
          <td style={{width: "50%"}}>:</td>
          <td style={{width: "50%"}}>{JSON.parse(employee).Nationality}</td>
        </tr>
        </tbody>
        </Table>
        </center><br></br>
        <center><a class="btn p-2" type="button" href="/EmpSalaryReport"  style={{backgroundColor: "#4c3cc8", border: "none", color: "white"}}>Check My Salary</a></center>
        </Card.Body>
        </Card>
        </Col>
       
      </Row>

      <br></br>

      <Row>
        <Col>
        <Card className="card shadow px-5" style={{ width: '30rem', height:"100%",  border: " 3px solid #8B008B", borderRadius: "15px" }}>
      <Card.Body >
      <center><Card.Title  style={{color: "#8B008B", fontSize: "28px" }}>Today's Date and Time</Card.Title></center><br></br>
        <center>
        <Card.Subtitle className="mb-2 text-muted">
          Current Date : {date}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Current Time :  {currentTime} 
        </Card.Subtitle>

        </center>
        </Card.Body>
        </Card>
        </Col>
      </Row>
          </Container>
        </Col>
      </Row>
     </Container>
                   
 
 </div>
 </div>
 </div>

    </div>
    </main>
     );
}
 
export default UserProfile;

