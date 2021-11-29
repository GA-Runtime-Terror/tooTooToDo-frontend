import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import FooterTwo from "./FooterTwo";

const SignUp = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
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
        
        </div>

        <h2> New User Sign-up</h2>

      <div className="signup-input">
        <h5>Create username</h5>
        <input onChange={(e) => setUsername(e.target.value)} />
        <h5>Create password</h5>
        <input onChange={(e) => setPassword(e.target.value)} />

        <button id="register-button"
          onClick={() => {
            if (!userName.length || !password.length) {
              alert("Please enter username or password");
            } else {
              api.post("/users", { userName, password }).then(({ data }) => {
                console.log(data);
                localStorage.setItem(
                  "user",
                  JSON.stringify({ userName, password })
                );
                navigation("/");
              });
            }
          }}
        >
          register
        </button> 

    
        <div className="register-footer-div">
             </div>
       
     
      </div>
<FooterTwo />
      
    </div>
  );
};

export default SignUp;
