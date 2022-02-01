import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
import Carrusel from "../component/carousel";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="mx-0 ">
        <Carrusel />

        <div
          className="row py-5 d-flex justify-content-center "
          style={{ backgroundColor: "#C7F464", padding: "100px" }}
        >
          <Card />
          <Card />
          <Card />
        </div>
        <div>sitios de interés</div>
      </div>
    </>
  );
};
