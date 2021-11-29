import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { api } from '../api';
import FooterThree from './FooterThree';

const SignIn = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const navigation = useNavigate()
    return (
        <div >

<div className="signup-header">
<div className="header-div">
          <img
            className="toucan-logo"
            src="https://i.ibb.co/Jt8zy7x/toucan-1.png"
            alt="toucan-1"
          />
          
          <h1> Toucan </h1>
        </div>
</div >

<h2> Log In Here!</h2>

<div className="signup-input">
            <h5>Enter username</h5>
            <input onChange={(e) => setUsername(e.target.value)} />
            <h5>Enter password</h5>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>

            <button id="register-button" onClick={() => {
                if(!userName.length || !password.length) {
                    alert('Please enter username or password')
                } else {
                    api.get(`/users/login/authenticate`, {params:{userName: userName, password: password,}}).then(({ data }) => {
                        console.log(data)
                        // localStorage.setItem("user", JSON.stringify({ userName, password }))
                        // navigation('/')
                    })
                }
            }}>
                login
            </button>
</div>
            
        <FooterThree />
            
        </div>
        )
}
    

export default SignIn
