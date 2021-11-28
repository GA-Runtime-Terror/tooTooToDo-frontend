import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import FooterTwo from './FooterTwo';

const SignIn = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const navigation = useNavigate()
    return (
        <div >

<div className="signup-header">

<p> word space lojalihcnkjkankjcnas</p>

</div>
            <h5>Enter username</h5>
            <input onChange={(e) => setUsername(e.target.value)} />
            <h5>Enter password</h5>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button className="register-button" onClick={() => {
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

            
        <FooterTwo />
            
        </div>)
}

export default SignIn
