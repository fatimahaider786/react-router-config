import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";

// Pages Import
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contactus/Contact.jsx";
import Login from "./pages/Login/Login.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Services from "./pages/Services/Service.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import Help from "./pages/Help.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "", 
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)