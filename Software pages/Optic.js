
import "./Optic.css"
import optics from "../Images/optics.jpg"
import optics2 from "../Images/optics2.jpg"
import optics3 from "../Images/optics3.jpg"
import optics4 from "../Images/optics4.jpg"
import optics5 from "../Images/optics5.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"


function Optic() {
    
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
<h1 className="text-center m-auto">eOptics</h1>
<br></br>
</div>


            
{/* Optic1 starts */}

<div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">e-Optics Software</h1> <br></br>
            <h3>Optical Management Software</h3>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="optic1">Optical software company supplying off the shelf software to the optical industries and optical prescription laboratories. With over 5 years of commitment to Optics we continue to keep our optical Practice Management Software and Lab Management Software systems at the fore, to provide sound business value to our customers. It is, improving your Practice ,improve communication with your customers, streamline your process & increase capacity, improve your productivity & sales opportunities, develop more oversight & control in your business.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="opticimg1">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={optics} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={optics2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={optics3} class="d-block w-100" alt="..."></img>
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

       

{/* Optic1 ends*/}



{/* Optic soft starts */}


      
{/* <div class="card">  */}
<br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >Why choose Optical Management Software</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="opticsoftimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={optics4} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={optics5} class="d-block w-100" alt="..."></img>
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
                                <p class="card-text" id="opticsoft">
                                    <ul>
                                      <li>Improving your Practice</li>
                                      <li>Improve communication with your customers</li>
                                      <li>Streamline your process & increase capacity</li>
                                      <li>Improve your productivity & sales opportunities</li>
                                      <li>Develop more oversight & control in your business</li>
                                    </ul>

                                </p>
                                <br></br>
                            </div>
                            </div>
                        </div> 

                    {/* </div> */}

{/* Optic soft ends */}



{/* Account & selling & reports starts */}


 <div className="container-fluid" id="list">
    
            <div className="container" data-aos="fade-up" data-aos-duration="1500">

                <div className="row">

                    <div className="col-lg-4">
                            <h2 className="text-center">Accounts</h2> 
                            <ul>
                                <li>Balance Sheet</li>
                                <li>Profit & Loss Account</li>
                                <li>Ledger</li>
                                <li>Bank Account</li>
                                <li>Cheque Received</li>
                                <li>Account</li>
                                <li>Tax</li>
                                <li>Cheque Register</li>
                            </ul>
                        
                    </div>

                    <div className="col-lg-4">
                            <h2 className="text-center">Selling</h2> 
                            <ul>
                                <li>Sales Order & Billing</li>
                                <li>Receipt</li>
                                <li>Buying</li>
                                <li>Optical Supplier</li>
                                <li>Purchase Invoice</li>
                                <li>Voucher</li>
                                <li>Production</li>
                                <li>Contractor (Manufacturer)—Contract Worker</li>
                            </ul>
                        
                    </div>

                    <div className="col-lg-4">
                            <h2 className="text-center">Reports</h2> 
                            <ul>
                                <li>User Defined Reports</li>
                                <li>Quotation</li>
                                <li>Invoice</li>
                                <li>Billing</li>
                                <li>Profit & Loss Account</li>
                                <li>Balance Sheet</li>
                                <li>Ledger</li>
                                <li>User Defined Reports & Customized Reports</li>
                            </ul>
                        
                    </div>


                </div>


            </div>
            <br></br>




{/* Account & selling & reports ends */}


{/* Setting application starts */}


            <div className="container" data-aos="fade-up" data-aos-duration="1500">


                <div className="row">
                        <h2 className="text-center">Common Settings Application</h2>
                    <div className="col-lg-6"> 
                        <ul>
                            <li>Ledger Settings</li>
                            <li>Report Settings</li>
                            <li>API Provider</li>
                            <li>Quotation Type</li>
                            <li>User</li>
                            <li>Bank Account Linking (Excel Sheet Upload or Entry)</li>
                        </ul>

                    </div>

                    <div className="col-lg-6">
                        
                        <ul>
                        <li>Role</li>
                        <li>Email Send Notification</li>
                        <li>Text message Templates</li>
                        <li>Action Permission</li>
                        <li>Contact Information</li>
                        </ul>
                        
                    </div>



                </div>





            </div>
<br></br> <br></br>





{/* Setting application starts */}






{/* CRM & Inventory & HR starts */}



<div className="container" data-aos="fade-up" data-aos-duration="1500">

<div className="row">


    <div className="col-lg-4" id="list3">
            <h2 className="text-center">HR Management</h2> 
            <ul>
                <li>Employee</li>
                <li>Employee Leave Form</li>
                <li>Department</li>
                <li>Division</li>
                <li>Pay Information (Customer & Supplier & Manufacturer)</li>
            </ul>
        
    </div>

    <div className="col-lg-4" id="list3">
            <h2 className="text-center">Inventory</h2> 
            <ul>
                <li>Product</li>
                <li>Stock Ledger</li>
                <li>Product Category</li>
                <li>Model</li>
                <li>Inventory Adjustment</li>
            </ul>
        
    </div>

    <div className="col-lg-4" id="list3">
            <h2 className="text-center">CRM</h2> 
            <ul>
                <li>Customer</li>
                <li>Doctor</li>
                <li>Hospital</li>
                <li>Contact</li>
            </ul>
        
    </div>


</div>


</div>


</div>
{/* container-fluid div !!!! */}





{/* CRM & Inventory & HR ends */}





</div>
{/* optical1 divv ends */}





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

export default Optic;