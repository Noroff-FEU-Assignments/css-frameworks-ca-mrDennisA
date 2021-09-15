import React from "react";

import { Carousel } from "react-bootstrap";

export default function index() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/carousel/carousel-1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/carousel/carousel-2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/carousel/carousel-3.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
