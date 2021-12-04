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

				<h1 className="title"y> Toucan </h1>
				<div id='menu-div'>
					<div className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
						<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
							<>
								<GlobalStyles />
								<button className="button" onClick={themeToggler}>Light/Dark</button>
							</>
						</ThemeProvider>
					</div>
					<i
						onClick={handleToggle}
						id='hamburger'
						class='fas fa-bars fa-2x'></i>
				</div>
			</div>
		</div>
	);
}

export default Header;
