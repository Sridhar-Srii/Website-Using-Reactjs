
import x628 from "../Images/x628.jpg"
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"


function X628 () {

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
            <a class="nav-link active" href="#"><i class="fa fa-linkedin"></i></a>  
        </li>

        
        </div>
    </div>
</nav> <br></br> <br></br>  <br></br>

{/* Navbar Ends */}


        {/*  starts */}

        <div class="card" > <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">X628</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="e9999">X628-C is an innovative biometric fingerprint reader for Time & Attendance applications. The X628-C offers unparalleled performance by using an advanced proprietary matchine algorithm which is reliable, precise and has the fastest fingerprint matching speed. It comes with TCP/IP and RS-232 communication ports. An optional USB port allows administrator to transfer data when network isn’t available. X628-C is also available with integrated Proximity (ID) or Mifare option for multi-factor authentication.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="ifaceimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <img src={x628} class="d-block w-100" alt="..."></img>
            
            </div>
            
            <br></br>
        </div> 
       
        </div>

        {/*  ends */}




        <div className="card">
            <div class="container table-responsive py-5" data-aos="fade-up" data-aos-duration="1500"> 
            <br></br>
            <table class="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Feature	</th>
                <th scope="col">Specification</th>
                
                </tr>
            </thead>
            <tbody>
                
                <tr>
                <th scope="row">Special Feature</th>
                <td>Push Data Technology</td>
                </tr>

                <tr>
                <th scope="row">Fingerprint Capacity</th>
                <td>3000 Templates</td>
                
                </tr>

                <tr>
                <th scope="row">ID Card Capacity</th>
                <td>3000 Cards</td>
                
                </tr>

                <tr>
                <th scope="row">Transactions</th>
                <td>1,00,000 Logs</td>
                
                </tr>

                <tr>
                <th scope="row">Sensor</th>
                <td>500 DPI Optical Sensor</td>
                
                </tr>

                <tr>
                <th scope="row">CPU</th>
                <td>800 MHz</td>
                
                </tr>

                <tr>
                <th scope="row">Display</th>
                <td>2.8” TFT Screen</td>
                
                </tr>

                <tr>
                <th scope="row">Verification Speed</th>
                <td>≤ 0.5 sec</td>
                
                </tr>
     
            
                
                
            </tbody>
            </table>
    </div>                     


            <div class="container table-responsive py-5" data-aos="fade-up" data-aos-duration="1500"> 
            <br></br>
            <table class="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Feature	</th>
                <th scope="col">Specification</th>
                
                </tr>
            </thead>
            <tbody>
                
                <tr>
                <th scope="row">FAR</th>
                <td>0.0001%</td>
                </tr>

                <tr>
                <th scope="row">FRR</th>
                <td>1%</td>
                
                </tr>

                <tr>
                <th scope="row">Communication</th>
                <td>RS232, RS485, TCP/IP, USB</td>
                
                </tr>

                <tr>
                <th scope="row">Power</th>
                <td>5V DC , 2Amps</td>
                
                </tr>

                <tr>
                <th scope="row">Operating Temperature</th>
                <td>0°C – 45°C</td>
                
                </tr>

                <tr>
                <th scope="row">Operating Humidity</th>
                <td>20%-80%</td>
                
                </tr>

                <tr>
                <th scope="row">Dimension(LxWxT)</th>
                <td>193.6 x 146.8 x 111 mm</td>
                
                </tr>

                <tr>
                <th scope="row">Dimension (L x W x T)</th>
                <td>190 x 135.8 x 51.5 mm</td>
                
                </tr>

                <tr>
                <th scope="row">Optional Feature</th>
                <td>Mifare / Proximity</td>
                
                </tr>

             
            
                
                
            </tbody>
            </table>
    </div>                     


</div>




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

export default X628;