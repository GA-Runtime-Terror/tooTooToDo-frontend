import React from 'react';
import { Link } from 'react-router-dom';

function FooterTwo() {
	return (
		<div className='footer-two'>
			<h3>
				<Link exact to='/sign-in'>
					Log in
				</Link>
			</h3>
			<Link exact to='/'>
				<i className='fas fa-home fa-3x'> </i>
			</Link>
			<p className='footer-two-words'>words </p>
		</div>
	);
}

export default FooterTwo;
