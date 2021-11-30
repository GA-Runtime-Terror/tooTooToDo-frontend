import { Link } from 'react-router-dom';
import React from 'react';

function LandingHeader() {
	return (
		<div>
			<div className='header-div'>
				<Link to='/'>
					<img
						id='toucan-logo'
						src='https://i.ibb.co/Jt8zy7x/toucan-1.png'
						alt='toucan-1'
					/>
				</Link>

				<h1> Toucan </h1>
			</div>
		</div>
	);
}

export default LandingHeader;
