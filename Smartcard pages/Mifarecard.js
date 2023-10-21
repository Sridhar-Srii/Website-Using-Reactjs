
import hotel from "../Images/hotel.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
import mifarecard from "../Images/mifarecard.jpg"
import mifare1k from "../Images/mifare1k.jpg"
import mifare4k from "../Images/mifare4k.jpg"


function Mifarecard () {

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









<div className="card">
                <br></br>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Mifare 1k(NXP Chip)</h1>
            <br></br>
            <div id="lease">
            <p>1K NXP Mifare® Classic cards are designed for user convenience and simple integration, allowing complete transactions to be handled in less than 100 ms. This means that the cardholder is not forced to stop at the card reader for the card to be read. This high-speed processing allows high throughput at gates, boarding areas, and toll booths. 1K Mifare cards can even remain in a wallet or purse during the transaction. With 1 kByte EEPROM read/write memory, Mifare Classic 1K cards are compatible with existing Mifare infrastructures. They function at a distance of up to 10cm, without the need for a battery. These 1K NXP Mifare cards are available in your choice of 100% PVC or composite PVC-PET, 13.56 MhZ, Type A standard, CR80 size (standard credit card size), with a gloss finish. 1K Mifare cards may be used for a variety of applications, including ID cards, access control, public transportation, road tolls, and event ticketing.</p>
            </div>
            </div>
            <br></br>



{/* Specifications starts */}



{/* <div class="card"  > <br></br> */}
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Specifications
</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="checkin">

                <ul>
                    <li>13.56 MHz</li>
                    <li>1 kByte, organized in 16 sectors with 4 blocks (one block contacts 16 bytes)</li>
                    <li>Operating distance: Up to 10 cm (depending on antenna geometry)</li>
                    <li>Contactless transmission of data and energy supply without a battery</li>
                    <li>Typical transaction speed is 100 ms</li>
                    <li>Data retention of 10 years</li>
                    <li>Each card has a unique serial number</li>
                    <li>Features a glossy finish and a printable surface in your choice of PVC or PVC-PET</li>
                </ul>



                </p>
               
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="ifaceimg">
            <img src={mifare1k} class="d-block w-100" alt="..."></img>
          </div>
        </div> 
        {/* </div> */}




{/* Specifications ends */}




{/*  */}

{/* <div className="card"> */}
                <br></br>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Mifare 4k(NXP Chip)</h1>
            <br></br>
            <div id="lease">
            <p>MIFARE interface platform consists of a few product lines, and the MIFARE 4k belongs to the MIFARE Classic family. The MIFARE 4k is fundamentally used for storing memories, yet a simple security mechanism divides the memories into segments. Therefore, this product family is ideal for high-volume transactions like transport ticketing, time and attendance solutions, car parking, and loyalty programs.</p>
            </div>
            </div>
            <br></br>
    {/* </div> */}


{/*  */}




{/* Specifications starts */}



{/* <div class="card"  > <br></br> */}
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Specifications
</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="checkin">

                <ul>
                    <li>13.56 MHz</li>
                    <li>4 kByte, organized in 32 sectors with 4 blocks and 8 sectors with 16 blocks (one block contacts 16 bytes)</li>
                    <li>User definable access conditions for each memory block</li>
                    <li>Operating distance: Up to 10 cm (depending on antenna geometry)</li>
                    <li>Contactless transmission of data and energy supply without a battery</li>
                    <li>Typical transaction speed is 100 ms</li>
                    <li>Data retention of 10 years</li>
                    <li>Each card has a unique serial number</li>
                    <li>Features a glossy finish and a printable surface in your choice of PVC or PVC-PET</li>
                </ul>



                </p>
               
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="ifaceimg">
            <img src={mifare4k} class="d-block w-100" alt="..."></img>
          </div>
        </div> 
        {/* </div> */}




{/* Specifications ends */}



</div>

{/* divvv */}

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

export default Mifarecard;