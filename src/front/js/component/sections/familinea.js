import React, { useState, useEffect, useContext } from "react";
import fondoFamilinea from "../../../img/backgrounds/familinea.png";
import jello5 from "../../../img/avatares/jello (5).png";
import jello1 from "../../../img/avatares/jello (2).png";
import jello2 from "../../../img/avatares/jello (1).png";
import jello3 from "../../../img/avatares/jello (3).png";
import jello4 from "../../../img/avatares/jello (4).png";
import { New } from "../new";
import { Polaroid } from "../polaroid";
import { Context } from "../../store/appContext";
import { Carousel } from "react-bootstrap"


export const Familinea = () => {


  return (
    <div
      className="py-5"
      style={{
        background: `url(${fondoFamilinea})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="col-6" style={{ paddingTop: "300px" }}>
          <p className="fs-4">
            Con familinea lograremos mantener al tanto a todas nuestras
            familias. Aquí podrás ver noticias respecto al retorno a la
            presencialidad, logros de aprendizaje, experiencias educativas,
            talleres parentales y mucho más.
          </p>
        </div>
      </div>
      <Noticias />
    </div>
  );
};

const Noticias = () => {
  return (
    <div className="container-fluid mx-5">

      <div className="row">
        <div className="col-6">
          <ListNews />

        </div>
        <div className="col-4 mx-2">
          <Galery />

        </div>

      </div>
    </div>
  );
};

const ListNews = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container d-flex justify-content-center">

      <div className=" row">
        {store.anuncios.map((element, key) => {
          return (
            <New
              variant="warning"
              nivel={element.nivel}
              titulo={element.titulo}
              body={element.detalle}
              autor={element.autor}
            />
          )
        })}

      </div>

    </div>

  );
};

const Galery = () => {
  let galery = [jello1, jello2, jello3, jello4, jello5, jello2];

  return (
    <>
      <Carousel>
        {galery.map((element, index) =>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={element}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>Aportes de nuestra Comunidad Educativa</h1>
            </Carousel.Caption>
          </Carousel.Item>

        )}
      </Carousel>
    </>
  )

}

