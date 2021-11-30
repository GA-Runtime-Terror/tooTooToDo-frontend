import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { lightTheme, darkTheme } from './Toggle';

function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	const [theme, setTheme] = useState('light');
	const themeToggler = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<div>
			<div className='header-div'>
				<Link to='/'>
					{' '}
					<img
						id='toucan-logo'
						src='https://i.ibb.co/Jt8zy7x/toucan-1.png'
						alt='toucan-1'
					/>{' '}
				</Link>

				<h1> Toucan </h1>
				<div id='menu-div'>
					{/* <nav className="navBar"> */}
					<button onClick={handleToggle}>
						<i id='hamburger' class='fas fa-bars fa-2x'></i>
					</button>

					<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
						<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
							<>
								<GlobalStyles />
								<button onClick={themeToggler}>Light/Dark</button>
							</>
						</ThemeProvider>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
