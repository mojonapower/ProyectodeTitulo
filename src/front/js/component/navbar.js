import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "./login";
import logo from "../../img/logo.png";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-warning text-light shadow-lg  opacity-75">
      <div className="container-fluid ">
        <div className="row ">
          <img
            classname="col"
            src={logo}
            style={{ width: "80px", marginLeft: "10px" }}
          ></img>
          <h2 className="ms-0 col my-auto">Vecinal Norte 3</h2>
        </div>
        <Link to={"/familinea"}>
          <button
            className="btn btn-warning text-white btn-lg"
            style={{ background: "#BF62A2" }}
          >
            Familinea
          </button>
        </Link>
        <Link to={"/"}>
          <button
            className="btn btn-warning text-white btn-lg"
            style={{ background: "#00AFA9" }}
          >
            Nuestro Jardín
          </button>
        </Link>
        <Link to={"/recursos"}>
          <button
            className="btn btn-warning text-white btn-lg"
            style={{ background: "#775CA6" }}
          >
            Biblioteca
          </button>
        </Link>
        <div className="ml-auto mx-5">
          <LoginModal />
        </div>
      </div>
    </nav>
  );
};
