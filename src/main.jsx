
import { createRoot } from 'react-dom/client'
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import ContactUs from './pages/Contactus/contactUs.jsx';
import AboutUs from './pages/about/About.jsx';
import Home from './pages/Home.jsx';
import Terms from './pages/Terms/Terms.jsx';
import Login from './pages/Login/Login.jsx';
import Portfolio from './pages/portfolio/portfolio.jsx';
import Services from './pages/Services/Service.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Help" element={<Help/>} />
      <Route path="/Terms" element={<Terms/>} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Service" element={<Services/>}/>



    
    </Routes>
  </BrowserRouter>,
)
