import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";


const EditLeave = () => {
    const[EmpId,idchange]=useState("");
    const[LeaveStatus,leavechange]=useState("");
    const[Reason,reasonchange]=useState("");
    const[FromDate,fdatechange]=useState("");
    const[ToDate,todatechange]=useState("");
    const[EmpName,enamechange]=useState("");
   
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
       navigate("/login");
        }
      });

  useEffect(()=>{
    getUserDetails();
  },[])
  const getUserDetails= async()=>{

let result= await fetch(`http://localhost:5000/updateleave/${id}`)
   result = await result.json()
   console.warn(result)
   idchange(result.EmpId);
   leavechange(result.LeaveStatus);
   reasonchange(result.Reason);
   fdatechange(result.FromDate);
   todatechange(result.ToDate);
   enamechange(result.EmpName);
   
  }

  const handlesubmit= async()=>{
   console.warn(EmpId,LeaveStatus,Reason,FromDate,ToDate,EmpName);
   let result =  fetch(`http://localhost:5000/updateleave/${id}`,{
       method:'PUT',
       body: JSON.stringify({EmpId,LeaveStatus,Reason,FromDate,ToDate,EmpName}),
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
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container">

                    <div className="card shadow-2-strong card-registration shadow px-4" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Employee Leave Edit</h2>
                        </div>
                        <div className="card-body p-4 p-md-5">

                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Emp Id</label>
                                        <input required value={EmpId}  onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Leave Status</label>
                                        <input required value={LeaveStatus}  onChange={e=>leavechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Reason</label>
                                        <input value={Reason} onChange={e=>reasonchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>From Date</label>
                                        <input value={FromDate} onChange={e=>fdatechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>  To Data</label>
                                        <input value={ToDate} onChange={e=>todatechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>  Emp Name</label>
                                        <input value={EmpName} onChange={e=>enamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                             
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit" onClick={handlesubmit}>Save</button>
                                       <Link to="/LeaveReport" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default EditLeave;