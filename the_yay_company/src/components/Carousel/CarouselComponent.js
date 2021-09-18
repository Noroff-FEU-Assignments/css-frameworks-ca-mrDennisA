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
  }

  & a {
    display: none;
  }
`;

export default CarouselComponent;
