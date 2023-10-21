import "./Software.css"
import { Link,  useNavigate } from "react-router-dom"
// import payroll from "../Images/payroll.gif"
import mines from "../Images/mines.jpg"
import mines2 from "../Images/mines2.jpg"
import mines3 from "../Images/mines3.jpg"
import payroll from "../Images/payroll.jpg"
import payroll2 from "../Images/payroll2.jpg"
import payroll3 from "../Images/payroll3.jpg"
import petrol from "../Images/petrol.jpg"
import petrol2 from "../Images/petrol2.jpg"
import petrol3 from "../Images/petrol3.jpg"
import optics from "../Images/optics.jpg"
import optics2 from "../Images/optics2.jpg"
import optics3 from "../Images/optics3.jpg"
import skool from "../Images/skool.jpg"
import skool2 from "../Images/skool2.jpg"
import skool3 from "../Images/skool3.jpg"
import hotel from "../Images/hotel.jpg"
import hotel2 from "../Images/hotel2.jpg"
import hotel3 from "../Images/hotel3.jpg"
import reckon from "../Images/reckon.jpg"
import reckon2 from "../Images/reckon2.jpg"
import reckon3 from "../Images/reckon3.jpg"
import weigh from "../Images/weigh.jpg"
import weigh2 from "../Images/weigh2.jpg"
import weigh3 from "../Images/weigh3.jpg"
import logo from "../Images/logo.png"


function  Software() {



// const Navigate = useNavigate()








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
<h1 className="text-center m-auto">Software</h1>
<br></br>
</div>
 


     {/* @pay Start */}
       
        <div class="card"> 
        <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">@Pay (Attendance And Payroll Software)</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="pay">Gomath Technologies is specialized in providing the solution for Attendance & Payroll Software. It is designed to handle all the need in systematic effectual and easier way. Payroll Software helps us to establish and maintain long relationship with our customer and it has unlimited choices of options and configuration setting that fits the industrial recruitment of the customer and provide you better care of your products. Payroll Software brings us new opportunities and reduces involvement of time taking and complex day- to- day tasks.</p>
                <button id="btn1"><Link to="/pay"  id="link">Read more</Link></button>
                {/* <button id="btn1" onClick={()=>Navigate("/pay")}>Read more</button> */}
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="payimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={payroll} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payroll2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={payroll3} class="d-block w-100" alt="..."></img>
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
       
       
        

{/* @pay ends */}





             {/* eskool Start */}
       
        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center" >eSkool Management</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="eskoolimg">
            {/* <img src={eskool} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
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
                                <p class="card-text" id="eskool">eSkool allows educational institutions efficiently handle their Academic, Admission, Fee, Front Office,Library, Fleet , Inventory, Hostel, Discipline etc., In Academic module, institutions efficiently manage their day-to-day academic operations in the best way possible. It maintains complete student’s journey, from their enrollment to course completion. It enables schools to create assessments, monitor student’s academic flow and all other educational tasks easier & paper free.In Admission module, which empowers schools/colleges to manage all admission operations digitally entering student data into ERP reducing manpower and time.</p>
                                <button id="btn2"><Link to="/skool" id="link">Read more</Link></button>
                                <br></br>
                            </div>
                            </div>
                            <br></br>
                        </div> 

                        
                    {/* </div> */}

        {/* eskool ends */}




        {/* optical starts  */}

        {/* <div class="card"  >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Optical Management Software</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="optic">Optical software company supplying off the shelf software to the optical industries and optical prescription laboratories. With over 5 years of commitment to Optics we continue to keep our optical Practice Management Software and Lab Management Software systems at the fore, to provide sound business value to our customers.</p>
                <button id="btn1"><Link to="/optic" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="opticimg">
            {/* <img src={eoptics} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade3" class="carousel slide carousel-fade" data-bs-ride="carousel">
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


        {/* optics ends */}


        {/* epetro starts */}


        {/* <div class="card" >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">e-Petro (Fuel Management Systems)</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="epetroimg">
            {/* <img src={epetro} class="img-fluid rounded-start" alt="..."></img> */}
        <div id="carouselExampleFade4" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={petrol} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={petrol2} class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                <img src={petrol3} class="d-block w-100" alt="..."></img>
                </div>
            
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
                <div class="col-md-7 col-lg-7 col-sm-7 " >
                        <div class="card-body">
                            <p class="card-text" id="epetro">A Multi Utility Petrol Pump Management Software that is tightly integrated with inventory and accounting to provide users with updated info and actionable data on stocks and dues for decision making, follow ups and cost cutting. We offer you a multi-tasking application software, exclusively for petrol pumps, such that you can seamlessly manage your business. They help you to have a control over a myriad of departments without enhancing your man power.</p>
                            <button id="btn2"><Link to="/petro" id="link">Read more</Link></button>
                            <br></br>
                        </div>
                        </div>
                        <br></br>
                    </div> 
                {/* </div> */}

        {/* epetro ends */}



        {/* ehotel starts */}


        {/* <div class="card" >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">e-Hotel</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="ehotel">Hotel Management Software is the modern solution which has whole range of integrated modules to cover every aspect of property management. The generalized version of eHotel – Hotel Management Software is wide accepted worldwide with due to its state-of-art technology and extremely easy to use in nature. The major modules of the latest eHotel – Hotel Management Software constitutes of Easy Check-in / Check-out, 2 Click guest reservation, Group Management, House Keeping, Night Audit, Travel Agent, Guest History and lot other.</p>
                <button id="btn1"><Link to="/hotel" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="ehotelimg">
            {/* <img src={ehotel} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade5" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={hotel} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotel2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={hotel3} class="d-block w-100" alt="..."></img>
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <br></br>
        </div> 
        {/* </div> */}


        {/* ehotel ends */}


        {/* ereckon starts */}


        {/* <div class="card" >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">e-Reckon</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="ereckonimg">
            {/* <img src={ereckon} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade6" class="carousel slide carousel-fade" data-bs-ride="carousel">
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div class="col-md-7 col-lg-7 col-sm-7 " >
            <div class="card-body">
                <p class="card-text" id="ereckon">eReckon is a complete retail management system and the best point of sale system for your retail businesses. We have closely worked with our customers to develop the system addressing the needs and challenges they face in every day operations. Most importantly its ease of use, customization and quick to learn makes it an inevitable retailer’s choice.</p>
                <button id="btn2"><Link to="/reckon" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <br></br>
        </div> 
      {/* </div> */}

        {/* ereckon ends */}


        {/* e-weigh starts */}


        {/* <div class="card" > */}
             <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">e-Weigh</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="eweigh">Ease to use windows based weighbridge software. Supporting to Slip Re-Printing, Editing, Deleting With User Access. Provide Direct Net Weight Feature (Slip Entry – Single entry system). Indication for Existing vehicle tare weigh compare with new weight. Provide Feature For Slip Entry Date (Visible / Hide / Date Modifying).</p>
                <button id="btn1"><Link to="/weigh" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="eweighimg">
            {/* <img src={eweigh} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={weigh} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={weigh2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={weigh3} class="d-block w-100" alt="..."></img>
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade7" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade7" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <br></br>
        </div> 
        {/* </div> */}


        {/* e-weigh ends */}


        {/* e-mines ends */}

        {/* <div class="card" >  */}
        <br></br>   
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">e-Mines</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="emineimg">
            {/* <img src={emines} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={mines} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={mines2} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={mines3} class="d-block w-100" alt="..."></img>
                    </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade8" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade8" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div class="col-md-7 col-lg-7 col-sm-7 " >
            <div class="card-body">
                <p class="card-text" id="emine">Welcome eMines into your enterprise and experience the magic. We provide comprehensive Mining solution has been fine-tuned to meet your every need, thanks to years of experience gained by the company in working with clients in this space. It helps companies in Mining & Minerals to transform business processes – both internally and externally, and weave together suppliers, logistics service providers and partners into a collaborative ecosystem focused on increasing efficiency and responsiveness to end customers. It provides “change on demand” capability to tweak your system on-the-go, to rapidly respond to evolving corporate imperatives, regulatory changes and market conditions.</p>
                <button id="btn2"><Link to="/mines" id="link">Read more</Link></button>
                <br></br>
            </div>
            </div>
            <br></br>
        </div> 
      {/* </div> */}



      {/* e-mines ends */}


      </div>
            {/* @pay divv ends */}
           



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
                    <div class="col-sm-5">
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



export default Software;