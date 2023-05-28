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


const EditEmployee = () => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState();
    const[UserId,idchange]=useState("");
    const[FullName,namechange]=useState("");
    const[EmailId,emailchange]=useState("");
    const[MobileNo,phonechange]=useState("");
    const[Address,addresschange]=useState("");
    const[DateOfJoining,joiningchange]=useState("");
    const[Gender,genderchange]=useState("");
    const[DateOfBirth,birthchange]=useState("");
    const[Department,deptchange]=useState("");
    const[Nationality,nationalitychange]=useState("");
    const { id } = useParams();
    const navigate = useNavigate();

  useEffect(()=>{
    getUserDetails();
  },[])
  const getUserDetails= async()=>{

let result= await fetch(`http://localhost:5000/update/${id}`)
   result = await result.json()
   console.warn(result)
   idchange(result.UserId);
   namechange(result.FullName);
   emailchange(result.EmailId);
   phonechange(result.MobileNo);
   addresschange(result.Address);
   joiningchange(result.DateOfJoining);
   genderchange(result.Gender);
   birthchange(result.DateOfBirth);
   deptchange(result.Department);
   nationalitychange(result.Nationality);
  }
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  

  const handlesubmit= async()=>{
   console.warn(FullName,EmailId,MobileNo,Address,DateOfJoining,Gender,DateOfBirth,Department,Nationality);
   let result =  fetch(`http://localhost:5000/update/${id}`,{
       method:'PUT',
       body: JSON.stringify({FullName,EmailId,MobileNo,Address,DateOfJoining,Gender,DateOfBirth,Department,Nationality}),
       headers:{
        'Content-Type':'Application/json'
       }
     
});
result = await result.json();
if(result){
    navigate('/EmployeeReport');
}

}


    return ( 
        <main>
        <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
         
        </div>
        {user && 
        user.map((data,index)=> (
        <h5 className='sig'>{data.name}</h5>
        ))}

        <NavDropdown>
             <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
       
      </header>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
      <div>
      <Link to='/' className='nav-logo'>
      <img class="logo" src="/logo.png" alt="" style={{height:"70px"}}/>
        </Link>
      </div>
        </nav>
        </aside>
         {/* <div > */}

        <div className="row ">
            <div className="offset-lg-3 col-lg-6">
                <form className="container">

                    <div className="card shadow-2-strong card-registration shadow px-4" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2 className='fw-bold p-4' style={{color:"#f10086", fontSize:"30px"}}>Employee Data Edit</h2>
                        </div>
                        <div className="card-body p-4 p-md-5">

                            <div className="row">

                                <div className="col-lg-6">
                                <fieldset disabled>
                                    <div className="form-group">
                                        <label>User Id</label>
                                        <input required value={UserId}  onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={FullName}  onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={EmailId} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={MobileNo} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input value={Address} onChange={e=>addresschange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>DateOfJoining</label>
                                        <input value={DateOfJoining} onChange={e=>joiningchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input value={Gender} onChange={e=>genderchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>DateOfBirth</label>
                                        <input value={DateOfBirth} onChange={e=>birthchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <input value={Department} onChange={e=>deptchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Nationality</label>
                                        <input value={Nationality} onChange={e=>nationalitychange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <center><div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit" onClick={handlesubmit}>Save</button>
                                       <Link to="/EmployeeReport" className="btn btn-danger">Back</Link>
                                    </div>
                                </div></center>

                            </div>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    {/* </div> */}
    </main>
     );
}
 
export default EditEmployee;