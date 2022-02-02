import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./login";
export const Navbar = () => {
  return (
    <nav className="navbar  text-secondary shadow-2-strong">
      <div className="container-fluid ">
        <h2>Vecinal Norte 3</h2>

        <div className="ml-auto mx-5">
          <LoginModal />
        </div>
      </div>
    </nav>
  );
};
