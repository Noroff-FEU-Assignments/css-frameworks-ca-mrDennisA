import styled from "styled-components";

import { Carousel } from "react-bootstrap";

const CarouselComponent = styled(Carousel)`
  & .carousel-indicators {
    margin-bottom: 2rem;
  }

  & .carousel-indicators .active {
    background: var(--color01);
  }
  & .carousel-indicators [data-bs-target] {
    height: 30px;
    opacity: 1;
    width: 30px;
    border: unset;
    border-radius: 2px;
    box-shadow: 0 3px 6px #000;
  }

  & a {
    display: none;
  }
`;

export default CarouselComponent;
