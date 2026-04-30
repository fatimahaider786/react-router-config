import { NavLink, Outlet } from "react-router";

function App() {
  return (
    <div className="bg-pink-950 p-5">
      <h1 className="text-white text-2xl mb-4">Navigation Menu</h1>
      
      <nav className="flex flex-wrap gap-4 mb-10">
        <NavLink to="/" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>Contact Us</NavLink>
        <NavLink to="/login" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>Login</NavLink>
        <NavLink to="/portfolio" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>Portfolio</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>Services</NavLink>
        <NavLink to="/terms" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>Terms</NavLink>
        <NavLink to="/help" className={({isActive}) => isActive ? "text-white font-bold" : "text-gray-300"}>Help</NavLink>
      </nav>


      <div className="p-4 bg-white rounded-lg shadow-md">
        <Outlet />
      </div>
    </div>
  );
}

export default App;