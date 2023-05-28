import React from 'react'

export default function About() {
  return (
    <div>
    {/* <!-- Navbar Start --> */}
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={{height:"90px"}}>
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img class="logo" src="/logo.png" alt="" style={{height:"70px", marginBottom:"20px"}}/>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" >
            <span class="navbar-toggler-icon" ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse" style={{backgroundColor:"#fff", marginBottom:"33px"}}>
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" class="nav-item nav-link " style={{fontSize:"20px", color:"#B20DEE", marginTop:"20px", fontWeight:"bold"}}>Home</a>
                <a href="/about" class="nav-item nav-link" style={{fontSize:"20px", color:"#B20DEE" , marginTop:"20px", fontWeight:"bold"}}>About</a>
                <a href="/team" class="nav-item nav-link" style={{fontSize:"20px", color:"#B20DEE" ,  marginTop:"20px", fontWeight:"bold"}}>Our Team</a>
                
                <a href="/contact" class="nav-item nav-link" style={{fontSize:"20px", color:"#B20DEE" , marginTop:"20px", fontWeight:"bold"}}>Contact</a>
            </div>

<div class="nav-item dropdown">
<a  class="btn  py-4 px-lg-5 d-none d-lg-block" style={{backgroundColor:"#B20DEE", color:"#fff",fontSize:"18px", marginTop:"25px"}} >Login Now<i class="fa fa-arrow-right ms-3"></i></a>
                    <div class="dropdown-menu fade-down m-0" style={{backgroundColor:"#fff"}}>
                        <a href="/userlogin" class="dropdown-item" style={{color:"#B20DEE",fontSize:"18px"}}>Employeee Login</a>
                        <a href="/login" class="dropdown-item" style={{color:"#B20DEE",fontSize:"18px"}}>Admin Login</a>
                    </div>
                </div> 
            
        </div>
    </nav>
 {/* <!-- Navbar End --> */}
 {/* <!-- Header Start --> */}
    <div class="container-fluid  py-5 mb-5 page-header" style={{
        // backgroundImage: `url('/4.jpg')`,
        background: "linear-gradient(rgba(24, 29, 56, .7), rgba(24, 29, 56, .7)), url(/4.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50vh",
        // width: "98vw",
      }}>
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-lg-10 text-center">
                    <h1 class="display-3 text-white animated slideInDown" style={{fontWeight:"bold"}}>About Us</h1>
                    <nav aria-label="breadcrumb"  style={{color:"#fff"}}>
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a class="text-white" href="/">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="/Team">Team</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="/Contact">Contact Us</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End --> */}
 {/* <!-- About Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src="3.jpg" alt="" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h3 class="section-title bg-white text-start  pe-3" style={{color:"#B20DEE"}} >About Us</h3>
                    <h1 class="mb-4">Welcome to SPR</h1>
                    <p class="mb-4">SPR was established in 2020. We were a start-up with the utmost potential, knowledge, and resources. We believe in creating technology being the solution to everything. With a goal set to help every entrepreneur with ideas to build their Own business, now biovus has become one of the leading software IT solutions and service companies.
SPR Coders is a software service company founded in 2023 by Prokash Malo ,Smritikana Banerjee and Ria Bose. SPR is one of the top software and website development companies in Kolkata, West Bengal.</p>

<p class="mb-4">We are simply set up inventors of innovations in a team. With hard work and smart work, we are able to get 100% satisfaction from our clients. We deliver projects that perform extensively perfects and produce your goal result for your company.</p>
                    {/* <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p> */}
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right  me-2" style={{color:"#B20DEE"}} ></i>gfgfhggh</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right  me-2" style={{color:"#B20DEE"}} ></i>gfgfhggh</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right  me-2" style={{color:"#B20DEE"}} ></i>Iffgfgfificate</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right  me-2" style={{color:"#B20DEE"}} ></i>Skbfcgffbors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right  me-2" style={{color:"#B20DEE"}} ></i>bfbbfccbgbcf</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right  me-2" style={{color:"#B20DEE"}} ></i>vfffvvv</p>
                        </div>
                    </div>
                    <a class="btn  py-3 px-5 mt-2" href="/terms" style={{backgroundColor:"#B20DEE", color:"#fff"}} >Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}








 {/* <!-- Footer Start --> */}
 <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
     <div class="container py-5">
         <div class="row g-5">
             <div class="col-lg-2 col-md-6">
                 <h4 class="text-white mb-3">Quick Link</h4>
                 <a class="btn " href="/" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  Home</a>
                 <a class="btn" href="/about" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  About Us</a>
                 <a class="btn " href="/contact" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  Contact Us</a>
                 <a class="btn " href="/team" style={{color:"#fff"}}><i class="fas fa-long-arrow-alt-right"></i>  Our Team</a>
             </div>
             <div class="col-lg-3 col-md-6">
                 <h4 class="text-white mb-3">Contact</h4>
                 <p class="mb-2"><i class="fas fa-map-marker-alt"></i> 123 Street, Kolkata, India</p>
                 <p class="mb-2"><i class="fas fa-phone-alt"></i> +1234567891</p>
                 <p class="mb-2"><i class="fa fa-envelope me-3"></i>spr@gmail.com</p>
                 <div class="d-flex pt-2">
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                     <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                 </div>
             </div>
             <div class="col-lg-3 col-md-6">
                 <h4 class="text-white mb-3">Gallery</h4>
                 <div class="row g-2 pt-2">
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-1.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-2.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-3.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-2.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-3.jpg" alt=""/>
                     </div>
                     <div class="col-4">
                         <img class="img-fluid bg-light p-1" src="/course-1.jpg" alt=""/>
                     </div>
                 </div>
             </div>
             <div class="col-lg-1 col-md-6">
             </div>
             <div class="col-lg-3 col-md-6">
                 <h4 class="text-white mb-3">Newsletter</h4>
                 <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                 <div class="position-relative mx-auto" style={{maxWidth: "400px"}}>
                     <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                     <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                 </div>
             </div>
         </div>
     </div>
   
 </div>
</div>
  )
}
