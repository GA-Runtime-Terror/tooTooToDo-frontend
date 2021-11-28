import React from "react";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div> <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>  </div>
        <div className="header-div">
          <img
            className="toucan-logo"
            src="https://i.ibb.co/Jt8zy7x/toucan-1.png"
            alt="toucan-1"
          />
          <h1> Toucan </h1>
        </div>
      </div>
  
  );
}

export default Header;
