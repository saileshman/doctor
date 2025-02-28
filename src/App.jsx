import {Routes,Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Myprofile from "./pages/Myprofile";
import Myappointent from "./pages/Myappointent";
import Appointment from "./pages/Appointment";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="mx-4 sm:mx-[10%]"> 
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/doctors" element={<Doctors/>}  />
      <Route path="/doctors/:speciality" element={<Doctors/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/contact" element={<Contact/>}  />
      <Route path="/my-profile" element={<Myprofile/>}  />
      <Route path="/my-appointment" element={<Myappointent/>}  />
      <Route path="/appointment/:docId" element={<Appointment/>}  />
    </Routes>
    <Footer />
    </div>
    
    </>
  )
}

export default App
