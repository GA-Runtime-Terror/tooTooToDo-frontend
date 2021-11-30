import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-div'>
			<h3>
				<Link exact to='/sign-up'>
					Sign up
				</Link>
			</h3>

			{/* <img className="sign-up" src="https://i.ibb.co/tPt7mqY/108230281-document-contract-logo-or-label-literature-letter-quill-pen-and-paper-icon-vector-illustra.png" alt="sign up" /> */}

			<br />
			<h4>
				<Link exact to='/sign-in'>
					Log in
				</Link>
			</h4>
		</div>
	);
}

export default Footer;
