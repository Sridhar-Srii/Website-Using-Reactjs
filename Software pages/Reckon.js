
import "./Reckon.css"
import reckon from "../Images/reckon.jpg"
import reckon2 from "../Images/reckon2.jpg"
import reckon3 from "../Images/reckon3.jpg"
import reckoninventory from "../Images/reckoninventory.jpg"
import reckonsale from "../Images/reckonsale.jpg"
import reckonpurchase from "../Images/reckonpurchase.jpg"
import reckoncrm from "../Images/reckoncrm.jpg"
import reckoncredit from "../Images/reckoncredit.jpg"
import reckongiftcard from "../Images/reckongiftcard.jpg"
import reckonbusiness from "../Images/reckonbusiness.jpg"
import reckonbarcode from "../Images/reckonbarcode.jpg"
import reckonreport from "../Images/reckonreport.jpg"
import reckonaccount from "../Images/reckonaccount.jpg"
import reckonsecurity from "../Images/reckonsecurity.jpg"
import logo from "../Images/logo.png"
import { Link } from "react-router-dom"


function Reckon () {

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
<h1 className="text-center m-auto">eReckon</h1>
<br></br>
</div>








        {/* Reckon1 starts */}

        <div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">eReckon</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="reckon1">eReckon is a complete retail management system and the best point of sale system for your retail businesses. We have closely worked with our customers to develop the system addressing the needs and challenges they face in every day operations. Most importantly its ease of use, customization and quick to learn makes it an inevitable retailer’s choice.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="reckon1img">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={reckon} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={reckon2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={reckon3} class="d-block w-100" alt="..."></img>
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

       



        {/* Reckon1 ends */}




        {/*  */}
{/* <div className="card">  */}


    <div id="cards">
    <div class="row row-cols-1 row-cols-md-3 g-4 container">
            <div class="col">
                <div class="card h-100">
                <img src={reckoninventory} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">INVENTORY CONTROL</h5>
                    <p class="card-text">Extensive database to help organize and manage even large/complex inventories Helps you to manage and count inventory. It allows you to create product descriptions, track purchase orders, and optimize inventory.</p>
                </div>

                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                <img src={reckonsale} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">POINT OF SALE</h5>
                    <p class="card-text">Adaptable to most any retail or wholesales business operation Easy to use and flexible to save you time and make you look good in front of your customers. Track customers, deposits, layaways, and special orders.</p>
                </div>
                
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                <img src={reckonpurchase} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">PURCHASE ORDERS</h5>
                    <p class="card-text">Quickly create purchase orders for your store using our preloaded invoices by supplier wise and easily load them into inventory when your supplied order arrives.Save time and reduce costs with powerful ordering/receiving</p>
                </div>
                
                </div>
            </div>
    </div>

    </div>
        {/*  */}




        {/*  */}
    <div id="cards">
    <div class="row row-cols-1 row-cols-md-3 g-4 container">
            <div class="col">
                <div class="card h-100">
                <img src={reckoncrm} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">CUSTOMER RELATIONS MANAGEMENT (CRM)</h5>
                    <p class="card-text">Unique flexible features for growing businesses CRM helps you keep track of customers. It tracks details about the customer like contact information, manage purchases and service history.</p>
                </div>

                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                <img src={reckoncredit} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">CARDPAYMENT CREDIT / DEBIT CARD PROCESSING</h5>
                    <p class="card-text">You can process credit/debit cards within eReckon. Simply swiping a customer’s credit card to complete a transaction. The process time is really quick and takes few seconds.</p>
                </div>
                
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                <img src={reckongiftcard} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">GIFT CARD/LOYALTY MANAGEMENT</h5>
                    <p class="card-text">Issue a free gift card for your loyal customers and reward them on every purchase. Assign and track gift card customers to increase sales and gain customer satisfaction.</p>
                </div>
                
                </div>
            </div>
    </div>

    </div>

        {/*  */}




        {/*  */}
        <div id="cards">
    <div class="row row-cols-1 row-cols-md-3 g-4 container">
            <div class="col">
                <div class="card h-100">
                <img src={reckonbusiness} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">MULTIPLE BUSINESS MANAGEMENT</h5>
                    <p class="card-text">You can track multiple businesses from one single database. This feature enables you to manage businesses that have two locations or single location but do most of their work from one office. It helps you to have separate reports, payments/ receipts handling and taxes.</p>
                </div>

                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                <img src={reckonbarcode} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">BAR CODE INTEGRATED</h5> <br></br>
                    <p class="card-text">You can speed up your point of sale and inventory control with receipt printers, barcode scanners, label printers, touch screens, and card readers.</p>
                </div>
                
                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                <img src={reckonreport} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">REPORTING</h5> <br></br>
                    <p class="card-text">Access to real-time information about your business is always available. You’ll know what items are selling, who the big spenders are, and how your business is growing.</p>
                </div>
                
                </div>
            </div>
    </div>

    </div>

        {/*  */}


  {/*  */}
  <div id="cards1">
    <div class="row row-cols-1 row-cols-md-3 g-4 container">
            <div class="col">
                <div class="card h-100">
                <img src={reckonaccount} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">ACCOUNTING</h5> <br></br>
                    <p class="card-text">Manage your finance and bank transactions easily to access reports anytime.</p>
                </div>

                </div>
            </div>

            <div class="col">
                <div class="card h-100">
                <img src={reckonsecurity} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">SECURITY</h5> <br></br>
                    <p class="card-text">We use SSL encryption, robust data centers, firewalls, and other measures to protect your data.</p>
                </div>
                
                </div>
            </div>

           
    </div>
<br></br>
    {/* </div> */}

        {/*  */}
















    </div>

        {/* 1st card div !!! */}




        
        </div>
        {/* reckon1 divv ends */}





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

export default Reckon;