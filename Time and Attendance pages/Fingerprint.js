


import { Link } from "react-router-dom";
import e9999 from "../Images/e9999.jpg"
import x628 from "../Images/x628.jpg"
import ds100 from "../Images/ds100.jpg"
import mt100 from "../Images/mt100.jpg"
import hn26c from "../Images/hn36c.jpg"
import ua300 from "../Images/ua300.jpg"
import logo from "../Images/logo.png"

function Fingerprint () {

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













       {/*  */}
       <div className="card"> <br></br>

<h1 className="text-center">Fingerprint Systems (Biometric)</h1>


<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
 <div class="col">
     <div class="card h-100">
     <img src={e9999} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">E9999</h4>
         <p class="card-text">E9999 is a biometric fingerprint reader for time and attendance application. The advanced fingerprint recognition system enables quick and accurate identity matching and can record up to 50,000 transaction records. It is incorporated with fast TCP/IP network communication, popular USB flash disk function to download/upload users and attendance logs.</p>
         <Link to="/e9999"><button id="smartbtn">Read more</button></Link>
     </div>

     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={x628} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">X628</h4>
         <p class="card-text">X628-C is an innovative biometric fingerprint reader for Time & Attendance applications. The X628-C offers unparalleled performance by using an advanced proprietary matchine algorithm which is reliable, precise and has the fastest fingerprint matching speed. It comes with TCP/IP and RS-232 communication ports. An optional USB port allows administrator to transfer data when network isn’t available. X628-C is also available with integrated Proximity (ID) or Mifare option for multi-factor authentication.</p>
         <Link to="/x628"><button id="smartbtn">Read more</button></Link>
     </div>
     
     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={ds100} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">DS100</h4>
         <p class="card-text">DS100 is a new innovative Biometric Attendance System. It has a special feature of Dual Sensor and one screen user interface for separate operation help avoid confusion and save employees’ check time. The radio frequency rays check the data of employee in and out from organization and it will generate the data of employee. DS100 can store 6000 Fingerprint templates and 1, 00,000 transactions. Standard TCP/IP communication makes sure the data transmission between terminals and PC can be easily done in several seconds.</p>
         <Link to="/ds100"><button id="smartbtn">Read more</button></Link>
     </div>
     
     </div>
 </div>
</div>
{/* <br></br> */}
</div>





<div id="cards">
<div class="row row-cols-1 row-cols-md-3 g-4 container">
 <div class="col">
     <div class="card h-100">
     <img src={mt100} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">MT100</h4>
         <p class="card-text">MT100 is a fingerprint and RFID card reader specialized for time attendance application. The portable feature and long battery life makes it perfect for off-side time management. While tracking time and attendance accurately.</p>
     </div>

     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={hn26c} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">HN36C</h4>
         <p class="card-text">HN36C is a compact and efficient stand-alone device for fingerprint baseed time attendance system with high speed scratch proof sensor and color TFT Displey for offices. Easy installation and flexibility of report generation.</p>
     </div>
     
     </div>
 </div>

 <div class="col">
     <div class="card h-100">
     <img src={ua300} class="card-img-top" alt="..."></img>
     <div class="card-body">
         <h4 class="card-title text-center">UA300</h4>
         <p class="card-text">UA300 can optimize the workforce and help the industry in encouraging high employee attendance. UA300 is a best bio metric security product for fingerprint to generate time and attendance. UA100 is uaser simply and access simply.</p>
     </div>
     
     </div>
 </div>
</div>
<br></br>
</div>







</div>
{/*  */}





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

export default Fingerprint;