import React from "react";
import {Link} from 'react-router-dom';

function FooterThree() {
    return (
      
        <div className="footer-two">

<h3>  <Link  exact to="/sign-up">Sign up </Link>  </h3>
        
       
         
        <Link  exact to="/">  <i className="fas fa-home fa-3x">  </i>  </Link>

       

        
        
     

<p className="footer-two-words">words </p>
        </div>

      
    );
  }
  
  export default FooterThree;