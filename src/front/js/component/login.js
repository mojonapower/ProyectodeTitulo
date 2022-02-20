import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { Context } from "../store/appContext";


const LoginModal = () => {
  const { store, actions } = useContext(Context);
  const [lgShow, setLgShow] = useState(false);
  const [form, setForm] = useState({
    mail: '',
    password: ''
  })

  const handleSubmit = () => {
    actions.login() == true ? sessionStorage.setItem('loged', true) :
      sessionStorage.setItem('loged', false)
  }
  return (
    <>
      <Button
        variant="success text-light btn-lg"
        onClick={() => setLgShow(true)}
      >
        Acceso Funcionarias
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Acceso Funcionarias
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label" onChange={(e) => {
                let data = form;
                data.mail = e.target.value
                setForm(data)
              }}>
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                No vamos a compartir tus datos con nadie.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label" onChange={(e) => {
                let data = form;
                data.password = e.target.value
                setForm(data)
              }}>
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
