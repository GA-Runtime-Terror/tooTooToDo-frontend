import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FooterTwo from "./FooterTwo";

const SignUp = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  return (
    <div className="sign-up">

        <div className="signup-header">

        
        </div>


      <div className="signup-input">
        <h5>Create username</h5>
        <input onChange={(e) => setUsername(e.target.value)} />
        <h5>Create password</h5>
        <input onChange={(e) => setPassword(e.target.value)} />

        <button
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
       <FooterTwo />
     
      </div>

      
    </div>
  );
};

export default SignUp;
