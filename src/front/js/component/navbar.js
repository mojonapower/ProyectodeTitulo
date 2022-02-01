import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./login";
export const Navbar = () => {
  return (
    <nav className="navbar " style={{ backgroundColor: "#4ECDC4" }}>
      <div className="container-fluid ">
        <span className="navbar-brand mb-0 h1">Vecinal Norte 3</span>

        <div className="ml-auto mx-5">
          <LoginModal />
        </div>
      </div>
    </nav>
  );
};
