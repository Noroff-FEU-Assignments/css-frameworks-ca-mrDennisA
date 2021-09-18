import React from "react";

import { Carousel } from "react-bootstrap";

import CarouselComponent from "./CarouselComponent";

export default function index() {
  return (
    <CarouselComponent>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/carousel/carousel-1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/carousel/carousel-2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/carousel/carousel-3.jpg" alt="Third slide" />
      </Carousel.Item>
    </CarouselComponent>
  );
}
