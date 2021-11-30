import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-div'>
       <h3>  <Link  to="/sign-up">Sign up </Link>  </h3>
         <br/>
        <h3> <Link to="/sign-in"> Log in </Link> </h3>
    </div>);
  }
  
  export default Footer;
