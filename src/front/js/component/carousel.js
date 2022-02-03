import React from "react";
import { Carousel } from "react-bootstrap";
import uno from "../../img/1.png";
import dos from "../../img/2.png";
import tres from "../../img/3.png";
import cuatro from "../../img/4.png";

const Carrusel = () => (
  <div className="col">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100 " src={uno} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={dos} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={tres} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cuatro} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </div>
);
export default Carrusel;
