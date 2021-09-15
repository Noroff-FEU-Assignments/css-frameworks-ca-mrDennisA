import React from "react";
import { Container } from "react-bootstrap";

import Carousel from "../../components/Carousel";
import About from "../../components/About";
import Accoridon from "../../components/Accordion";
import Tabs from "../../components/Tabs";

export default function index() {
  return (
    <>
      <Carousel />
      <Container>
        <About />
        <Accoridon />
        <Tabs />
      </Container>
    </>
  );
}
