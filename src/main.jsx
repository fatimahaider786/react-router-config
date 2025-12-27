import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import ContactUs from "./pages/Contactus/ContactUs.jsx";
import AboutUs from "./pages/about/About.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Services from "./pages/Services/Service.jsx";
import Help from "./pages/Help.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/help" element={<Help />} />
      <Route path="/Terms" element={<Termsms />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service" element={<Services />} />
    </Routes>
  </BrowserRouter>
);
