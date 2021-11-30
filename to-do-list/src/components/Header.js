import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Header() {
	const [menu, setMenu] = useState(false);

	useEffect(() => {
		handleHamburger();
	}, []);

	const menuToggle = () => {
		setMenu(!menu);
	};

	const handleHamburger = () => {
		if (menu === true) {
			return (
				<div id='menu-div'>
					<div>
						{' '}
						<label class='switch'>
							<input type='checkbox' />
							<span class='slider round'></span>
						</label>{' '}
					</div>
				</div>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div>
      <div className="header-div">
      <Link  exact to="/">  <img
          id="toucan-logo"
          src="https://i.ibb.co/Jt8zy7x/toucan-1.png"
          alt="toucan-1"
        />  </Link>
        
       
        {handleHamburger()}
 
        <h1> Toucan </h1>
         <i onClick={() => {menuToggle()}} class="fas fa-bars fa-2x"></i>
      </div>

      
    </div>
  );
}

export default Header;
