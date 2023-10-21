
import './Mine.css'
import mines from "../Images/mines.jpg"
import mines2 from "../Images/mines2.jpg"
import mines3 from "../Images/mines3.jpg"
import mineoperational from "../Images/mineoperational.jpg"
import mineoperational2 from "../Images/mineoperational2.jpg"
import mineproductivity from "../Images/mineproductivity.jpg"
import mineproductivity2 from "../Images/mineproductivity2.jpg"
import mineexplonation from "../Images/mineexplonation.jpg"
import mineexplonation2 from "../Images/mineexplonation2.jpg"
import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"


function Mine () {

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
<h1 className="text-center m-auto">eMines</h1>
<br></br>
</div>







        {/* Mine1 starts */}

        <div class="card" id="card"> <br></br>
        <div class="row g-0 container m-auto">
            <h1 className="text-center">eMines</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="mine1">Welcome eMines into your enterprise and experience the magic. We provide comprehensive Mining solution has been fine-tuned to meet your every need, thanks to years of experience gained by the company in working with clients in this space. It helps companies in Mining & Minerals to transform business processes – both internally and externally, and weave together suppliers, logistics service providers and partners into a collaborative ecosystem focused on increasing efficiency and responsiveness to end customers. It provides “change on demand” capability to tweak your system on-the-go, to rapidly respond to evolving corporate imperatives, regulatory changes and market conditions.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="mine1img">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
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

       
        {/* Mine1 ends */}


        {/* Operational starts */}



        {/* <div class="card" >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Increase operational efficiency</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="operationalimg">
            {/* <img src={ereckon} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade6" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={mineoperational} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={mineoperational2} class="d-block w-100" alt="..."></img>
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
                <p class="card-text" id="operational">With complete visibility across all mines, stocks, beneficiation, transportation, schedules and non-mining business processes, you can plan perfectly, make wise decisions and also adapt processes on-the-go to meet changing market demands. eMines includes excellent planning and business intelligence features.</p>
                <br></br>
            </div>
            </div>
            <br></br>
        </div> 


      {/* </div> */}




        {/* Operational ends */}


        {/* Productional starts */}



        {/* <div class="card">  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Increase production efficiency</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="productional">Optimize the supply chain, manage transportation, logistics and scheduling with ease Make quick and smart decisions, with information about mines/plant operations and plans at your fingertips Scientifically plan; and compare the plan with actual situation at all stages of the mining operation Add power to your work force; enable them to plan, execute and track tasks on the move with innovative mobile solutions.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="productionalimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={mineproductivity} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={mineproductivity2} class="d-block w-100" alt="..."></img>
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

        {/* Productional ends */}




        {/* Site starts */}

        {/* <div class="card" >  */}
        <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Manage multiple exploration sites</h1> <br></br>
            <div class="col-md-4 col-lg-4 col-sm-4" id="siteimg">
            {/* <img src={ereckon} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade4" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={mineexplonation} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                    <img src={mineexplonation2} class="d-block w-100" alt="..."></img>
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
                <p class="card-text" id="site">You can now handle several exploration sites simultaneously. Besides allowing the planner to schedule and allocate resources and equipments, eMines also helps track the performance and cost details for individual exploration activities.
                <br></br> <br></br>
                <ul>
                    <li>Manage exploration activities scientifically through an exclusive mining project monitoring software</li>
                    <li>Directly capture remote site surveys, geological and core log analysis data from remote exploration sites</li>
                    <li>Automatically generate survey and geological plans collated from the remote site</li>
                    <li>Automatically generate quality and quantity plans</li>
                    <li>Estimate funds required for exploration sites and help to reserve it.</li>
                </ul>
                </p>
                <br></br>
            </div>
            </div>
            <br></br>
        </div> 

      {/* </div> */}


    {/* Site ends */}


    {/* Lease & Plan starts */}

    {/* <div className="card"> */}
                <br></br>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Manage mining leases and land parcels</h1>
            <br></br>
            <div id="lease">
            <p>Land procurement and management of land parcels can now be handled digitally with least paper work. You can procure land at the right time based on the planned scientific working boundary. All the land details, along with the revenue and village map, can be recorded for future reference.
            <br></br> <br></br>
                <ul>
                    <li>Eliminate the hassles of conventional paper work</li>
                    <li>Manage land digitally through exercises like surface rent payment, dead rent, renewal of licenses for exploration/mining, etc.</li>
                </ul>
            </p>
            </div>
            </div>
            <br></br>
    {/* </div> */}




    {/* <div className="card"> */}
                <br></br>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Plan scientifically</h1>
            <br></br>
            <div id="lease">
            <p>eMines enables you to model the mine from just boreholes data. It helps engineers to analyze the data in the form of contours, digital terrain models, 3-dimensional block models, grade and tonnage curves, and in-situ and retrievable reserves. You can make the most of our facility to design ramps, haul roads, dump yards, and tools to perform production sequencing and optimize the mineral extraction through economic pit limits.
            <br></br> <br></br>
                <ul>
                    <li>Generate Iso-Pach/Iso-Metal/Iso-Grade/RL intercept/Stripping ratio contours</li>
                    <li>Generate 2D/3D mine models accurately.</li>
                    <li>Simulate and decide the ultimate pit and dump yards based on residual grade and market value</li>
                    <li>Generate production plans based on invoices, and transportation schedules based on quality, quantity and logistics constraints</li>
                </ul>
            </p>
            </div>
            </div>
            <br></br>
    {/* </div> */}


    {/* Lease & Plan ends */}



    {/* Profit starts */}

    {/* <div class="card">  */}
    <br></br>
        <div class="row g-0 container m-auto" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Plan Work Profit</h1> <br></br>
            <div class="col-md-6 col-lg-6 col-sm-6" >
            <div class="card-body">
                <p class="card-text" id="productional">our solution stays with you, on-the-move.engineers no longer have to rely on walkie-talkies and other means of field communication. Live information from mines, crushers and logistics providers can be supplied to engineers and planners on rugged hand-held devices. • Perform daily planning and solve Blending problems on the move • Track the quality, production and equipment status in real-time • Plan on the move; optimize the operational activities based on field conditions.</p>
            </div>
            </div>
            <div class="col-md-4 col-lg-4 col-sm-4" id="productionalimg">
            {/* <img src={pay} class="img-fluid rounded-start" alt="..."></img> */}
            <div id="carouselExampleFade1" class="carousel slide carousel-fade" data-bs-ride="carousel">
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

        {/* </div> */}


    {/* Profit ends */}





    {/* <div className="card"> */}
                <br></br>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Optimize ore logistics and transportation</h1>
            <br></br>
            <div id="lease">
            <p>get a grip on the whole picture, and manage to optimize.transportation is the single largest cost in the entire mining supply chain. Various modes of transport like river, surface and sea with carrier options like trucks, rail, barges, ships, etc., at different stages with varying volumes, unit cost, transport time and penalties, make supply chain scheduling and logistics planning a very tough task. With eMines, hope is in sight • Optimize transportation, logistics and scheduling across the supply chain • Improve operational efficiency and reduce cost • Streamline constraints like ore quality, quantity and statutory documentation required for stage-to-stage transport • Easily overcome contract problems concerning multi-modal transportation • Achieve consolidated enterprise view for each cost element declared in the system • Configure various constraints in transportation based on forecast or historical data, with objectives like ‘minimization of the cost or ton for shipment, with least deviation from plans, and high quality’ • Simulate the data for longer horizons based on forecasts using techniques like Multi-Linear Regression and Genetic Programming libraries • Handle tasks like stockpile management, ore blending, transport scheduling, demand and supply planning, maintenance planning, generation of invoices based on quality accepted by customer.
            </p>
            </div>
            </div>
            <br></br>
    {/* </div> */}




    {/* <div className="card"> */}
                <br></br>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="text-center">Optimize ore logistics and transportation</h1>
            <br></br>
            <div id="lease">
            <p>get a grip on the whole picture, and manage to optimize.transportation is the single largest cost in the entire mining supply chain. Various modes of transport like river, surface and sea with carrier options like trucks, rail, barges, ships, etc., at different stages with varying volumes, unit cost, transport time and penalties, make supply chain scheduling and logistics planning a very tough task. With eMines, hope is in sight • Optimize transportation, logistics and scheduling across the supply chain • Improve operational efficiency and reduce cost • Streamline constraints like ore quality, quantity and statutory documentation required for stage-to-stage transport • Easily overcome contract problems concerning multi-modal transportation • Achieve consolidated enterprise view for each cost element declared in the system • Configure various constraints in transportation based on forecast or historical data, with objectives like ‘minimization of the cost or ton for shipment, with least deviation from plans, and high quality’ • Simulate the data for longer horizons based on forecasts using techniques like Multi-Linear Regression and Genetic Programming libraries • Handle tasks like stockpile management, ore blending, transport scheduling, demand and supply planning, maintenance planning, generation of invoices based on quality accepted by customer.</p>
            </div>
            </div>
            <br></br>
    {/* </div> */}




{/*  */}



<div className="container-fluid" id="list1">
    
    <div className="container" data-aos="fade-up" data-aos-duration="1500">
    <h1 className='text-center'>Our Project Modules</h1>
            <br></br>
        <div className="row">
           
            <div className="col-lg-4">
                    <h4 className="text-center">Finance & Accounting</h4> 
                    <ul>
                        <li>General Accounting</li>
                        <li>Receivables & Payables Management</li>
                        <li>Fixed Assets Management</li>
                        <li>Management Accounting</li>
                        <li>Consolidation & Reporting</li>
                        <li>Financial Services</li>
                        <li>Planning & Budgeting</li>
                        <li>Grants & Funds Management</li>
                    </ul>
                
            </div>

            <div className="col-lg-4">
                    <h4 className="text-center">Sales & Distribution</h4> 
                    <ul>
                      <li>CRM</li>
                      <li>Demand Planning</li>
                      <li>Order Management</li>
                      <li>Outbound Logistics</li>
                      <li>Warranty Management</li>
                      <li>Service Management</li>
                      <li>Customer Portal</li>
                    </ul>
                
            </div>

            <div className="col-lg-4">
                    <h4 className="text-center">Maintenance Management</h4> 
                    <ul>
                        <li>Equipment Induction & Setup</li>
                        <li>Preventive Maintenance</li>
                        <li>Predictive Maintenance</li>
                        <li>Shutdown / Outage Management</li>
                        <li>Work Management</li>
                        <li>Reliability & Review</li>
                    </ul>
                
            </div>


        </div>
        <br></br>
        <div className="row">

        <div className="col-lg-4">
                    <h4 className="text-center">Project Management</h4> 
                    <ul>
                      <li>Planning & Budgeting</li>
                      <li>Project Definition</li>
                      <li>Project Planning & Tracking</li>
                      <li>Project Closure</li>
                      <li>Billing</li>
                    </ul>
                
            </div>
           
            <div className="col-lg-4">
                    <h4 className="text-center">Production</h4> 
                    <ul>
                      <li>Estimation Planning</li>
                      <li>Work Order Management</li>
                      <li>Scheduling Manufacturing</li>
                      <li>Execution Costing</li>
                    </ul>
                
            </div>


            <div className="col-lg-4">
                    <h4 className="text-center">Quality Management</h4> 
                    <ul>
                       <li>Attribute Management</li>
                       <li>Inspection & Sampling Plans</li>
                       <li>Quality Administration</li>
                       <li>Acceptance & Rejection analysis</li>
                    </ul>
                
            </div>


        </div>






    </div>


    </div>






    </div>

{/* mine1 divv ends */}




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

export default Mine;