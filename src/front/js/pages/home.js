import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Tabs, Tab, Col, Row, Nav } from "react-bootstrap";

import { Valores } from "../component/sections/valores";
import Carrusel from "../component/carousel";
import { Noticias } from "../component/sections/noticias";
import { Familinea } from "../component/sections/familinea";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="mx-0  ">
        <Carrusel></Carrusel>
        <Valores></Valores>
        <div className="row"></div>
        {/*<Tabs
            defaultActiveKey="profile"
            className="mb-3 justify-content-center"
            transition={true}
            variant="pills warning"
          >
            <Tab eventKey="home" title="Home">
              <Valores />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Noticias />
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Familinea />
            </Tab>
          </Tabs>*/}

        {/* <Noticias />
        <div style={{ paddingBottom: "100px" }}>
          <Valores />
        </div>

       <Familinea />*/}
      </div>
    </>
  );
};
