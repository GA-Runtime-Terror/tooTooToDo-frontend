import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../api'

const SignIn = () => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h5>username</h5>
            <input onChange={(e) => setUsername(e.target.value)} />
            <h5>password</h5>
            <input onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => {
                if(!userName.length || !password.length) {
                    alert('Please enter username or password')
                } else {
                    api.get(`/users/login/${userName}`).then(({ data }) => {
                        console.log(data)
                        // localStorage.setItem("user", JSON.stringify({ userName, password }))
                        // navigation('/')
                    })
                }
            }}>
                login
            </button>
            <Link to='/sign-up'>
            Don't have an account? Register</Link>
        </div>)
}

export default SignIn
