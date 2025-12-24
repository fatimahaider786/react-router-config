import "./App.css";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <h1 className="bg-amber-800 p-3.5">This is routing</h1>
      <NavLink to="/contact" end>
        Contact Us
      </NavLink>
      <br />
          <NavLink to="/About" end>
        AboutUs
      </NavLink>
      <br />
        <NavLink to="/Home" end>
        Home
      </NavLink>
      <br />
        <NavLink to="/Help" end>
        Help
      </NavLink>
       <br />
        <NavLink to="/Terms" end>
        Terms
      </NavLink>
       <br />
        <NavLink to="/Login" end>
        Login
      </NavLink>
      <br />
        <NavLink to="/portfolio" end>
        portfolio
      </NavLink>
           <br />
        <NavLink to="/Service" end>
        Service
      </NavLink>
    </>
  );
}

export default App;
