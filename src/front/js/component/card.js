import React from "react";

const Card = ({ texto, titulo, variantBoton, img }) => (
  <div
    className="card  border-0 text-center  bg-transparent"
    style={{ width: "18rem", height: "450px" }}
  >
    <img src={img} className="card-img-top w-50" alt="..." />
    <div className="card-body">
      <h5 className="card-title">
        <bold>{titulo}</bold>
      </h5>
      <p className="card-text">{texto}</p>
    </div>
    <div className="card-footer border-0 bg-transparent">
      <a href="#" className={"btn  btn-outline-" + variantBoton}>
        "Leer Más"
      </a>
    </div>
  </div>
);
export default Card;
