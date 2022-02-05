import React, { useState, useEffect } from "react";
import ocho from "../../img/8.png";
import Material from "../component/recurso";
import biblioteca from "../../img/backgrounds/recursos.png";
import { Tabs, Tab } from 'react-bootstrap';
const Biblioteca = () => {
  const [documento, setDocumento] = useState('todo')
  const [filtro, setFiltro] = useState('')
  return (
    <>
      <div className="container-fluid" style={{
        background: `url(${biblioteca})`,
        paddingTop: "150px",
        backgroundRepeat: "no-repeat",
      }}>

        <div className="row d-flex justify-content-end my-5 mx-5">
          <p className=" col-6  my-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div className="container-fluid">
          <div className="row my-5">
            <div className="col my-auto mx-5 ">
              <Filtros />
            </div>
            <div className="col-7 my-5">
              <Tabs defaultActiveKey="todo" id="uncontrolled-tab-example" className="mb-3 mt-5">
                <Tab eventKey="todo" title="Todo ">
                  <div >
                    <Material filtro='todo' tipoDoc={documento} />
                  </div>
                </Tab>
                <Tab eventKey="salaCuna" title="Sala Cuna ">
                  <div >
                    <Material filtro={"salacuna"} tipoDoc={documento} />
                  </div>
                </Tab>
                <Tab eventKey="salaCunaMayor" title="Sala Cuna Mayor">
                  <div >
                    <Material filtro={"salaCunaMayor"} tipoDoc={documento} />
                  </div>
                </Tab>
                <Tab eventKey="medioMenor" title="Medio Menor" >
                  <div>
                    <Material filtro={"medioMenor"} tipoDoc={documento} />
                  </div>
                </Tab>
                <Tab eventKey="medios" title="Medios" >
                  <div >
                    <Material filtro={"medios"} tipoDoc={documento} />
                  </div>
                </Tab>
                <Tab eventKey="medioMayor" title="Medio Mayor" >
                  <div >
                    <Material filtro={"medioMayor"} tipoDoc={documento} />
                  </div>
                </Tab>
              </Tabs>
            </div>

          </div>
        </div>
      </div>


    </>
  );
};
const Filtros = () => (
  <>
    <div className="row my-5">
      <label className="col-2">Búsqueda por nombre</label>
      <input className=" col form-control" type="search" placeholder="Search" aria-label="Search" />
      <button className=" m-2 col-2 btn btn-outline-info text-secondary" type="submit">Buscar</button>
    </div>
    <div className="row my-5">
      <label className="col-2">Búsqueda por categoría</label>
      <input className=" col form-control" type="search" placeholder="Search" aria-label="Search" />
      <button className=" m-2 col-2 btn btn-outline-info text-secondary" type="submit">Buscar</button>
    </div></>
)

export default Biblioteca;
