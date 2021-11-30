import React, { useRef } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import FooterTwo from './FooterTwo';

const SignUp = (props) => {
	const navigation = useNavigate();
	const newUser = useRef(null);
	const newPassword = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault(e);
		const userName = newUser.current.value;
		const password = newPassword.current.value;

		if (!userName.length || !password.length) {
			alert('Please enter username or password');
		} else {
			api.post('/users', { userName, password }).then(({ data }) => {
				console.log(data);
				if (data.status === 200) {
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
				} else alert('ERROR : ' + data.msg);
			});
		}
	};

	return (
		<div>
			<div className='signup-header'>
				<div className='header-div'>
					<img
						className='toucan-logo'
						src='https://i.ibb.co/Jt8zy7x/toucan-1.png'
						alt='toucan-1'
					/>
					<h1> Toucan </h1>
				</div>
			</div>
			<h2> User Registration </h2>
			<div className='signup-input'>
				<h4>Create username</h4>
				<input type='text' ref={newUser} />
				<h4>Create password</h4>
				<input type='password' ref={newPassword} />
				<button id='register-button' onClick={handleSubmit}>
					register
				</button>
				<div className='register-footer-div'></div>
			</div>
			<FooterTwo />
		</div>
	);
};

export default SignUp;
