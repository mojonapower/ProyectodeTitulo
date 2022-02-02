import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Carrusel from "../component/carousel";
import { Valores } from "../component/sections/valores";
import { Noticias } from "../component/sections/noticias";
import { Familinea } from "../component/sections/familinea";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="mx-0 my-0 ">
        <Carrusel />
        <Valores />
        <Noticias />
        <Familinea />
      </div>
    </>
  );
};
