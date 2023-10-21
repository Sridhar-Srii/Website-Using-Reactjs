
import Ts20001 from "../Images/Ts1200.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom";



function Ts2000 () {

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










        {/*  starts */}

        <div class="card" > <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">TS2000</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="iface">TS2000 Turnstiles are best in class with inbuilt RFID and Biometric access control systems. It is made of stainless steel SUS304 with elegant design and has high durability. This devices are easy to install and use. The system adopts standard electrical interfaces that could be integrated with variety of devices such as card and fingerprint systems. This is the right product for access control stations, docks, tourist attractions, checking tickets, convention and exhibition management etc. Also you can record staff attendance making it perfect for gymnasiums, factories, enterprises, public institutions, etc.</p>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="tsimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <img src={Ts20001} class="d-block w-100" alt="..."></img>
            
            </div>
            
            <br></br>
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
                <th scope="row">Power requirements</th>
                <td>AC110V/ 220V, 50/ 60Hz</td>
                </tr>

                <tr>
                <th scope="row">Working temperature</th>
                <td>-28℃~60℃</td>
                
                </tr>

                <tr>
                <th scope="row">Working humidity</th>
                <td>5%~80%</td>
                
                </tr>

                <tr>
                <th scope="row">Working environment</th>
                <td>Indoor/ Outdoor (if sheltered)</td>
                
                </tr>

                <tr>
                <th scope="row">Net weight(kg)</th>
                <td>42</td>
                
                </tr>

                <tr>
                <th scope="row">RFID</th>
                <td>Maximum 30/ minute</td>
                
                </tr>

                <tr>
                <th scope="row">Fingerprint</th>
                <td>Maximum 25/ minute</td>
                
                </tr>

                <tr>
                <th scope="row">Lane width(mm)</th>
                <td>505</td>
                
                </tr>

                <tr>
                <th scope="row">Footprint(mm*mm)</th>
                <td>785*1110</td>
                
                </tr>

                <tr>
                <th scope="row">Dimension(mm)</th>
                <td>L=1110, W=280, H=987</td>
                
                </tr>


                <tr>
                <th scope="row">LED indicator</th>
                <td>Y</td>
                
                </tr>

                <tr>
                <th scope="row">Emergency mode</th>
                <td>Y</td>
                
                </tr>

                <tr>
                <th scope="row">Cabinet material</th>
                <td>SUS304 Stainless Steel</td>
                
                </tr>

                <tr>
                <th scope="row">Lid material</th>
                <td>SUS304 Stainless Steel</td>
                
                </tr>

                <tr>
                <th scope="row">Barrier material</th>
                <td>SUS304 Stainless Steel</td>
                
                </tr>

                <tr>
                <th scope="row">Barrier movement</th>
                <td>Rotation</td>
                
                </tr>


                <tr>
                <th scope="row">Options/ Accessories</th>
                <td>Counter, SUS316 Cabinet and Lid, Remote Control</td>
                
                </tr>

             
            
                
                
            </tbody>
            </table>
    </div>                     


</div>






</div>
{/* 1st card divv */}





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
                            {/* <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li> */}

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

export default Ts2000;