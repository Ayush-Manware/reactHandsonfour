import React from "react";
import { Link } from "react-router-dom";
import StoreFunction from "../Data/Store";

function Navbar() {

  

  return (
    <>
      <div className="navbar">
        <div className="home">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="student">
          <Link to={"/Student"}>Student</Link>
        </div>
        <div className="contact">
          <Link to={"/Contact"}>Contact Us</Link>
        </div>
      </div> 
    </>
  );
}

export default Navbar;
