import React from "react";
import fondoValores from "../../../img/backgrounds/Valores.png";
import Card from "../card";

export const Valores = () => {
  return (
    <div style={{ background: `url(${fondoValores})`, height: "900px" }}>
      <div
        className="row d-flex justify-content-between px-5 "
        style={{ paddingTop: "370px" }}
      >
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
