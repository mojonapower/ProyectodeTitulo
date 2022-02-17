import React from "react";
import fondoFamilinea from "../../../img/backgrounds/familinea.png";
import jello5 from "../../../img/avatares/jello (5).png";
import jello1 from "../../../img/avatares/jello (2).png";
import jello2 from "../../../img/avatares/jello (1).png";
import jello3 from "../../../img/avatares/jello (3).png";
import jello4 from "../../../img/avatares/jello (4).png";
import { New } from "../new";
import { Polaroid } from "../polaroid";

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
    <div className="container">
      <div className="row mt-5 mx-5">
        <div className="col-6 mt-5">
          <h2 className="text-info mt-5">
            Filtrar Anuncios por Nivel Educativo:
          </h2>
        </div>
        <div className="col-4 mt-5">
          <select
            className="form-select custombg mt-5"
            aria-label="Default select example"
          >
            <option selected>Seleccione Nivel Educativo</option>
            <option value="1">Sala Cuna</option>
            <option value="2">Sala Cuna Mayor</option>
            <option value="3">Medio Menor</option>
            <option value="4">Medios</option>
            <option value="5">Medio Mayor</option>
          </select>
        </div>
      </div>

      <ListNews />
      <Galery />
    </div>
  );
};

const ListNews = () => {
  return (
    <div className="container d-flex justify-content-center">

      <div className=" row">
        <New
          variant="success"
          nivel="Sala Cuna"
          titulo="Retorno a presencialidad"
          body="kdaksdhafjskdhfksjdhfjs"
        />
        <New
          variant="info"
          nivel="Medio mayor"
          titulo="Retorno a presencialidad"
          body="kdaksdhafjskdhfksjdhfjs"
        />
        <New
          variant="warning"
          nivel="Sala Cuna"
          titulo="Retorno a presencialidad"
          body="kdaksdhafjskdhfksjdhfjs"
        />
        <New
          variant="warning"
          nivel="Sala Cuna"
          titulo="Retorno a presencialidad"
          body="kdaksdhafjskdhfksjdhfjs"
        />
        <New
          variant="success"
          nivel="Sala Cuna"
          titulo="Retorno a presencialidad"
          body="kdaksdhafjskdhfksjdhfjs"
        />
      </div>

    </div>

  );
};

const Galery = () => {
  let galery = [jello1, jello2, jello3, jello4, jello5, jello2];
  return (<>
    <h3 className="text-center text-success">Aportes de nuestras familias </h3>
    <div className="row">
      {galery.map((element, index) =>
      (
        <Polaroid img={element} />
      )
      )}
    </div>
  </>)
}

/**
 * Sidebar
 *  <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{ width: "380px" }}>
      <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
        <svg className="bi me-2" width="30" height="24">Miau</svg>
        <span className="fs-5 fw-semibold">List group</span>
      </a>
      <div className="list-group list-group-flush border-bottom scrollarea">
        <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small>Wed</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Tues</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Mon</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>

        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Wed</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Tues</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Mon</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Wed</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Tues</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Mon</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Wed</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Tues</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <strong className="mb-1">List group item heading</strong>
            <small className="text-muted">Mon</small>
          </div>
          <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
      </div>
    </div>
 */