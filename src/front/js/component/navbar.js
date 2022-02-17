import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginModal from "./login";
import logo from "../../img/logo.png";
import { Modal } from 'react-bootstrap'
import check from '../../img/iconos/check.gif'
export const Navbar = () => {
  //MODAL DE INICIO Y CIERRE DE SESION
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  //CAMBIO DE BOTONES
  const [showLogin, setShowLogin] = useState('')

  useEffect(() => {
    console.log('dentro')
    if (sessionStorage.getItem('loged') == true) {
      console.log("estoy logeada")
    }
  }, []);
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
        {showLogin == false ?

          <div className="dropdown">
            <button className="btn btn-warning text-white btn-lg dropdown-toggle"
              style={{ background: "#775CA6" }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

              Administrador
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <Link to={"/recursos"}>
                <li><a className="dropdown-item" href="#">Recursos
                </a></li>
              </Link>
              <Link to={"/admin"}>
                <li><a className="dropdown-item" href="#">Panel de Administrador
                </a></li>
              </Link>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          : ''}
        <div className="ml-auto mx-5">
          {showLogin ? <LoginModal /> : <button onClick={() => {

            setShowLogin(true)
            sessionStorage.setItem('loged', false)
            history.push("/");
            handleShow()

          }} className="btn btn-danger">Cerrar Sesión</button>

          }
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sesión cerrada Satisfactoriamente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={check} className='img img-fluid d-block' />

        </Modal.Body>
      </Modal>
    </nav >
  );
};
