
import "./Skool.css"
import skool from "../Images/skool.jpg"
import skool2 from "../Images/skool2.jpg"
import skool3 from "../Images/skool3.jpg"
import skoolmodule1 from "../Images/skoolmodule1.jpg"
import skoolmodule2 from "../Images/skoolmodule2.jpg"
import skoolfeature1 from "../Images/skoolfeature1.jpg"
import skoolfeature2 from "../Images/skoolfeature2.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"



function Skool () {

    return (

        <div>



{/* // Navbar Starts */}

<nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand ms-4 " href="#"><img src={logo} alt="..." id="logo"></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0" id="nav">
            <li class="nav-item">
            <a><Link to="/" className="nav-link active">Home</Link></a>
            </li>
            <li class="nav-item">
            <a><Link to="/about" className="nav-link active">About Us</Link></a>
            </li>
            <li class="nav-item dropdown">
            <a><Link to="/software" className="nav-link active">Software</Link></a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                <li><a><Link to="/pay" class="dropdown-item">@Pay</Link></a></li>
                <li><a><Link to="/skool" class="dropdown-item">e-Skool</Link></a></li>
                <li><a><Link to="/optic" class="dropdown-item">e-Optic</Link></a></li>
                <li><a><Link to="/petro" class="dropdown-item">e-Petro</Link></a></li>
                <li><a><Link to="/hotel" class="dropdown-item">e-Hotel</Link></a></li>
                <li><a><Link to="/reckon" class="dropdown-item">e-Reckon</Link></a></li>
                <li><a><Link to="/weigh" class="dropdown-item">e-Weigh</Link></a></li>
                <li><a><Link to="/mines" class="dropdown-item">e-Mines</Link></a></li>
            </ul>
            </li>
            <li class="nav-item dropdown">
            {/* <a class="nav-link active dropdown-toggle" href="http://localhost:3000/product" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
            </a> */}
            <a><Link to="/product" activeClassName="link" class="nav-link active">Products</Link></a>
            {/* <a><NavLink to="/product" activeClassName="link" class="nav-link active">Products</NavLink></a> */}
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a><Link to="/time" class="dropdown-item">Time & Attendance System</Link></a></li>
                <li><a><Link to="/access" class="dropdown-item">Access Control System</Link></a></li>
                <li><a><Link to="/security" class="dropdown-item">Security Surveilance Systems</Link></a></li>
                <li><a><Link to="/smart" class="dropdown-item">Smart Card</Link></a></li>
                <li><a><Link to="/rfid" class="dropdown-item">RFID Projects</Link></a></li>
                <li><a><Link to="/tripod" class="dropdown-item">Tripod Turnstiles</Link></a></li>
                <li><a><Link to="/others" class="dropdown-item">Other Accessories & Components</Link></a></li>
            </ul>
            </li>
            <li class="nav-item dropdown">
            <a><Link to="/services" className="nav-link active">Services</Link></a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a><Link to="/fire" class="dropdown-item">Fire & Safety Measures</Link></a></li>
                <li><a><Link to="/gas" class="dropdown-item">Gas Filling & Services</Link></a></li>            </ul>
            </li>
            <li class="nav-item">
            <a><Link to="/contact" class="nav-link active" >Contact Us</Link></a>
            </li>
        </ul>

        <li className="nav-item" id="social">
            <a class="nav-link active" href="https://www.facebook.com/dhoni.sri.75?mibextid=ZbWKwL" target="blank"><i class="fa fa-facebook"></i></a>
            <a class="nav-link active" href="#"><i class="fa fa-instagram"></i></a>
            <a class="nav-link active" href="#"><i class="fa fa-twitter"></i></a>  
            {/* <a class="nav-link active" href="#"><i class="fa fa-whatsapp"></i></a>   */}
        </li>

        
        </div>
    </div>
</nav> <br></br> <br></br>  <br></br>

{/* Navbar Ends */}






<div className="main"> <br></br>
<h1 className="text-center m-auto">eSkool</h1>
<br></br>
</div>





{/* Skool1 starts */}

<div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">eSkool Management</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="skool1">eSkool allows educational institutions efficiently handle their Academic, Admission, Fee, Front Office,Library, Fleet , Inventory, Hostel, Discipline etc., In Academic module, institutions efficiently manage their day-to-day academic operations in the best way possible. It maintains complete student’s journey, from their enrollment to course completion. It enables schools to create assessments, monitor student’s academic flow and all other educational tasks easier & paper free.In Admission module, which empowers schools/colleges to manage all admission operations digitally entering student data into ERP reducing manpower and time.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="skool1img1">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={skool} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={skool2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={skool3} class="d-block w-100" alt="..."></img>
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            
            <br></br>
        </div> 




{/* Skool1 ends*/}


 {/* ERP starts */}
        {/* <div className="card "> */}
        <div className="row g-0 container-fluid m-auto" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="text-center">Why eSkool ERP?</h1>
        <div class="col-md-4 col-lg-6 col-sm-4" >
                            <div class="card-body">
                                <p class="card-text" id="erp">
                                    <ul>
                                      <li>Instant Report Generation</li>
                                      <li>Collaborative learning & inform Sharing</li>
                                      <li>It’s Usable, Securing, Scalable, and Reliable.</li>
                                      <li>Easy tracking of students by Parents and Teachers</li>
                                      <li>Analyzing the student overall performance.</li>
                                      <li>Connects all education stockholders, Administrators, Teachers, Students and Parents.</li>
                                    </ul>

                                </p>
                            </div>
        </div>
        <div class="col-md-4 col-lg-6 col-sm-4" >
                            {/* <div class="card-body"> */}
                                <p class="card-text" id="erp1">
                                    <ul>
                                    <li>Barcode Generation.</li>
                                    <li>Custom Imports & Exports.</li>
                                    <li>Document Management.</li>
                                    <li>Record Keeping.</li>
                                    <li>Notice Board Management.</li>
                                    </ul>

                                </p>
                                <br></br>
                            {/* </div> */}
                            
        </div>
                        
                        
                            </div>
                            {/* </div> */}

        {/* ERP ends */}




        {/* Modules starts */}

            
        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Modules</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="moduleimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={skoolmodule1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={skoolmodule2} class="d-block w-100" alt="..."></img>
                    </div>
                   
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </div>
                    <div class="col-md-7 col-lg-7 col-sm-7 " >
                            <div class="card-body">
                                <p class="card-text" id="module">
                                    <ul>
                                       <li>Academics</li>
                                       <li>Teachers Management</li>
                                       <li>Library Management with Barcode</li>
                                       <li>Transportation with tracking device</li>
                                       <li>Hostel</li>
                                       <li>Accounting</li>
                                       <li>Inventory</li>
                                       <li>Human Resource</li>
                                       <li>Project Settings</li>
                                       <li>100 + Reports</li>
                                    </ul>

                                </p>
                                <br></br>
                            </div>
                            </div>
                        </div> 

                        
                    {/* </div> */}

        {/* Modules ends */}



        
 {/* Featureskool starts */}
 {/* <div className="card "> */}
        <div className="row g-0 container-fluid m-auto" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="text-center">Features</h1>
        <div class="col-md-4 col-lg-6 col-sm-4" >
                            <div class="card-body">
                                <p class="card-text" id="erp">
                                    <ul>
                                      <li>Course & Batches</li>
                                      <li>Homework Updating</li>
                                      <li>Time Table</li>
                                      <li>Human Resource</li>
                                      <li>Finance</li>
                                      <li>Library</li>
                                      <li>Multi Login</li>
                                      <li>GPS & Transportation</li>
                                      <li>Online Exam</li>
                                      <li>SMS & E-Mail Integration</li>
                                      <li>School Event Calendar</li>
                                      <li>Multiple Dashboards</li>
                                      <li>Management – User /Fees /Attendance /Data/ Class/ News /Notice Board / Document</li>
                                    </ul>

                                </p>
                            </div>
        </div>
        <div class="col-md-4 col-lg-6 col-sm-4" >
                            {/* <div class="card-body"> */}
                                <p class="card-text" id="erp1">
                                    <ul>
                                      <li>Alumni Gallery</li>
                                      <li>Analytics</li>
                                      <li>Exam Results</li>
                                      <li>Students & Parents Login</li>
                                      <li>Centralized Monitoring</li>
                                      <li>Blog</li>
                                      <li>Lab & Inventory</li>
                                      <li>Student Information</li>
                                      <li>Barcode Integration</li>
                                      <li>Custom & Import and Export Reports</li>
                                      <li>Hostel Management</li>
                                      <li>Record Keeping</li>
                                      
                                    </ul>

                                </p>
                                <br></br>
                            {/* </div> */}
                            
        </div>
                        
                        
                            </div>
                            {/* </div> */}

        {/* Featureskool ends */}



        

        {/* Special features starts */}

            
        
        {/* <div class="card"  >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Special Features</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="special">

                <ul>
                    <li>Cloud server with SSL Certificate</li>
                    <li>Dedicated AC Manager</li>
                    <li>Priority Support</li>
                    <li>User Friendly</li>
                    <li>Secure Password Management</li>
                    <li>Smart Card Integration</li>
                </ul>



                </p>
               
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="specialimg">
            {/* <img src={eoptics} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={skoolfeature1} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={skoolfeature2} class="d-block w-100" alt="..."></img>
                    </div>
                   
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            
            </div>
            <br></br>
        </div> 
        {/* </div> */}




       
        {/* Special features ends */}


        
        </div>
        {/* skool1 divvv ends */}






{/* footer starts */}

        <footer>
        <div class="footer-top">
            <div class="container" data-aos="fade-up" data-aos-duration="1500">
                <div class="footer-day-time">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li>Opening Hours : Mon - Sat : 9.00 AM - 6.00 PM</li>
                                {/* <li>Sunday: 8:00 AM - 12:00 PM</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        
                        <h4>About us</h4>
                        <p>We are pleased to inform you that our company “Gomath Technologies” with the experience of last 20 years in electronic & Software Development Field.</p>
                       
                        
                    </div>

                    <div class="col-lg-6">
                        <h4>Information</h4>
                        <ul class="address1">
                            <li><i class="fa fa-map-marker"></i>#C3, Venkata Villa, Venkatesha Nagar,Kishkinta Road, West Tambaram,Chennai - 600 045.</li>
                            <li><i class="fa fa-map-marker"></i>14/9, Balasubramania Nagar, Perundurai, Road, Erode - 638011</li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90"> 9677784833 / 9443739833.</a></li> 
                            {/* <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:#">gomathtechnologies@gmail.com</a></li> */}
                            {/* <li><i class="fa fa-map-marker"></i>14/9, Balasubramania Nagar, Perundurai, Road, Erode - 638011</li> */}

                        </ul>
                    </div>

                    <div class="col-lg-2">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5 col-lg-5 col-md-5">
                        <p class="copyright text-uppercase">Copyright © Gomath Technologies 2023
                        </p>
                    </div>
                    {/* <div class="col-sm-7">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>


{/* footer ends */}

    










        </div>





    )
    
}

export default Skool;