import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home pages/Home';


import './App.css';
import About from './Home pages/About';
import Software from './Home pages/Software';
import Product from './Home pages/Product';
import Services from './Home pages/Services';
import Contact from './Home pages/Contact';
import Pay from './Software pages/Pay';
import Skool from './Software pages/Skool';
import Optic from './Software pages/Optic';
import Petro from './Software pages/Petro';
import Hotel from './Software pages/Hotel';
import Weigh from './Software pages/Weigh';
import Reckon from './Software pages/Reckon';
import Mine from './Software pages/Mine';
import Fire from './Service pages/Fire';
import Gas from './Service pages/Gas';
import Time from './Product pages/Time';
import Access from './Product pages/Access';
import Security from './Product pages/Security';
import Smart from './Product pages/Smart';
import RFID from './Product pages/RFID';
import Tripod from './Product pages/Tripod';
import Others from './Product pages/Others';
import Facial from './Time and Attendance pages/Facial';
import Fingerprint from './Time and Attendance pages/Fingerprint';
import Smartcard from './Time and Attendance pages/Smartcard';
import Iface301 from './Time Facial Recognition pages/Iface301';
import Iface302 from './Time Facial Recognition pages/Iface302';
import Vf300 from './Time Facial Recognition pages/Vf300';
import E9999 from './Time Fingerprit System pages/E9999';
import X628 from './Time Fingerprit System pages/X628';
import Ds100 from './Time Fingerprit System pages/Ds100';
import Accessfacial from './Access control System pages/Accessfacial';
import Accessfingerprint from './Access control System pages/Accessfingerprint';
import Accesssmartcard from './Access control System pages/Accesssmartcard';
import Contactcard from './Smartcard pages/Contactcard';
import Proximitycard from './Smartcard pages/Proximitycard';
import Mifarecard from './Smartcard pages/Mifarecard';
import Assettracking from './RFID pages/Assettracking';
import Vehicletracking from './RFID pages/Vehicletracking';
import Inventorytracking from './RFID pages/Inventorytracking';
import Materialtracking from './RFID pages/Materialtracking';
import Ts1000 from './Tripod Turnstile pages/Ts1000';
import Ts1200 from './Tripod Turnstile pages/Ts1200';
import Ts2000 from './Tripod Turnstile pages/Ts2000';

function App() {
  return (
    
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/software' element={<Software></Software>}></Route>
    <Route path='/product' element={<Product></Product>}></Route>
    <Route path='/services' element={<Services></Services>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>



    <Route path='/pay' element={<Pay></Pay>}></Route>
    <Route path='/skool' element={<Skool></Skool>}></Route>
    <Route path='/optic' element={<Optic></Optic>}></Route>
    <Route path='/petro' element={<Petro></Petro>}></Route>
    <Route path='/hotel' element={<Hotel></Hotel>}></Route>
    <Route path='/reckon' element={<Reckon></Reckon>}></Route>
    <Route path='/weigh' element={<Weigh></Weigh>}></Route>
    <Route path='/mines' element={<Mine></Mine>}></Route>


    <Route path='/fire' element={<Fire></Fire>}></Route>
    <Route path='/gas' element={<Gas></Gas>}></Route>


    <Route path='/time' element={<Time></Time>}></Route>
    <Route path='/access' element={<Access></Access>}></Route>
    <Route path='/security' element={<Security></Security>}></Route>
    <Route path='/smart' element={<Smart></Smart>}></Route>
    <Route path='/rfid' element={<RFID></RFID>}></Route>
    <Route path='/tripod' element={<Tripod></Tripod>}></Route>
    <Route path='/others' element={<Others></Others>}></Route>


    <Route path='/facial' element={<Facial></Facial>}></Route>
    <Route path='/fingerprint' element={<Fingerprint></Fingerprint>}></Route>
    <Route path='/smartcard' element={<Smartcard></Smartcard>}></Route>


    <Route path='/iface301' element={<Iface301></Iface301>}></Route>
    <Route path='/iface302' element={<Iface302></Iface302>}></Route>
    <Route path='/vf300' element={<Vf300></Vf300>}></Route>

    <Route path='/e9999' element={<E9999></E9999>}></Route>
    <Route path='/x628' element={<X628></X628>}></Route>
    <Route path='/ds100' element={<Ds100></Ds100>}></Route>


    <Route path='/accessfacial' element={<Accessfacial></Accessfacial>}></Route>
    <Route path='/accessfingerprint' element={<Accessfingerprint></Accessfingerprint>}></Route>
    <Route path='/accesssmartcard' element={<Accesssmartcard></Accesssmartcard>}></Route>


    <Route path='/contactcard' element={<Contactcard></Contactcard>}></Route>
    <Route path='/proximitycard' element={<Proximitycard></Proximitycard>}></Route>
    <Route path='/mifarecard' element={<Mifarecard></Mifarecard>}></Route>

    <Route path='/assettracking' element={<Assettracking></Assettracking>}></Route>
    <Route path='/vehicletracking' element={<Vehicletracking></Vehicletracking>}></Route>
    <Route path='/inventorytracking' element={<Inventorytracking></Inventorytracking>}></Route>
    <Route path='/materialtracking' element={<Materialtracking></Materialtracking>}></Route>

    <Route path='/ts1000' element={<Ts1000></Ts1000>}></Route>
    <Route path='/ts1200' element={<Ts1200></Ts1200>}></Route>
    <Route path='/ts2000' element={<Ts2000></Ts2000>}></Route>

    </Routes>

    </BrowserRouter>


  );
}

export default App;
