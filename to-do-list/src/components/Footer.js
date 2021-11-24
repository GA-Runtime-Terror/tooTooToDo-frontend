import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
    return (
        
        <div className="footer-div">

          <div className="sign-up-div">
       <h3> Sign up <Link  exact to="/sign-up"> here</Link>  </h3>
        </div>
       
         {/* <img className="sign-up" src="https://i.ibb.co/tPt7mqY/108230281-document-contract-logo-or-label-literature-letter-quill-pen-and-paper-icon-vector-illustra.png" alt="sign up" /> */}
        

         <br/>

        <h4>Already a member? Log in <Link  exact to="/SignIn"> here </Link> </h4>

       </div>
    );
  }
  
  export default Footer;
  