import React, { useState, useEffect } from "react";
import ocho from "../../img/8.png";
import Material from "../component/recurso";
const Biblioteca = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="banner d-flex justify-content-center m-0">
          <img src={ocho} />
        </div>
        <Material></Material>
      </div>
    </>
  );
};

export default Biblioteca;
