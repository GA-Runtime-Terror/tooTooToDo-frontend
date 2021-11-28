import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
    return (
      
        <div className="footer-two">

        
     <Link  exact to="/">  <i className="fas fa-home fa-3x">  </i>  </Link>

<p className="footer-two-words">words </p>
        </div>

      
    );
  }
  
  export default Footer;