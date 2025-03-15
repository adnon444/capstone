import React from "react";
import "./head.css" 
import logo from '../assets/images/logo.jpg';


console.log(logo);

function Head(){
    return (

        
            <img src={logo} alt="logo" height="150" width="350" />

    );
        

  };
  
  export default Head;