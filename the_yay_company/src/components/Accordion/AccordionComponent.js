import styled from "styled-components";

import { Accordion } from "react-bootstrap";

const AccordionComponent = styled(Accordion)`
  display: grid;
  gap: 1px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 22px rgba(0, 0, 0, 6%);
  & .accordion-item {
    border: none;
  }

  & .accordion-button {
    color: var(--color01);

    &::after {
      background-image: unset;
    }
    &:not(.collapsed) {
      background: #fff;
      box-shadow: 0 -1px 0 var(--color01) inset;
      border: unset;
    }
  }
  & .accordion-collapse {
    background: radial-gradient(closest-side, #fff, var(--color06));
  }

  & .accordion-body {
    display: grid;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
  }

  & img {
    width: 100%;
  }

  & .row {
    justify-content: center;
  }

  & .row * {
    color: #000;
  }
`;

export default AccordionComponent;
