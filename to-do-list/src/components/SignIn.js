import React, { useRef } from 'react';
import { api } from '../api';
import FooterThree from './FooterThree';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = (props) => {
	const navigation = useNavigate();
	const inputName = useRef(null);
	const inputPassword = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault(e);
		const userName = inputName.current.value;
		const password = inputPassword.current.value;

		if (!userName.length || !password.length) {
			alert('Please enter username or password');
		} else {
			api
				.get(`/users/login/`, {
					params: { userName: userName, password: password },
				})
				.then(({ data }) => {
					if (data.status === 200) {
						props.handleLogin(data);
						navigation('/logged-in');
					}
				});
		}
	};

	return (
		<div>
			<div className='signup-header'>
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
			<h2> User Login</h2>
			<div className='signup-input'>
				<h4>Enter username</h4>
				<input ref={inputName} type='text' />
				<h4>Enter password</h4>
				<input type='password' ref={inputPassword} />
				<button id='register-button' type='submit' onClick={handleSubmit}>
					login
				</button>
			</div>
			<FooterThree />
		</div>
	);
};

export default SignIn;
