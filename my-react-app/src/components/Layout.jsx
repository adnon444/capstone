import { Outlet, Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "./Layout.css"
import "./Head.css"
import "./Footer.css"
import MovingText from "./MovingText";
import Footer from "./Footer";
import Head from "./Head";
import React from "react";




const Layout = () => {


  return (
    <>


    <Head />
    <MovingText />



    <nav>

        <ul className="nav-list">
          <li>
            <Link to="/"><h2>Home</h2></Link>
          </li>
        
          
          <li>
            <Link to="/News"><h2>News</h2></Link>
          </li>


          <li>
            <Link to="/salespage"><h2>Sales Page</h2></Link>
          </li>
   

          <li>
            <Link to="/blog"><h2>Blog</h2></Link>
          </li>
          

     
          <li>
            <Link to="/contact"><h2>Contact</h2></Link>
          </li>


          <li>
            <Link to="/aboutus"><h2>About Us</h2></Link>
          </li>
        
        
        </ul>

        </nav>



      <Outlet />

      <Footer />
 
    </>
  )
};

export default Layout;