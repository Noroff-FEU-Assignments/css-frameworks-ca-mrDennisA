import styled from "styled-components";

import { Card } from "react-bootstrap";

const CardComponent = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  border: unset;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 5%);

  & .card-img-top {
    object-fit: cover;
    height: 190px;
  }

  & .card-body {
    padding: 1.25rem 2rem 2rem;
  }

  & .card-title {
    color: #000;
  }

  & .card-text {
    font-size: 18px;
  }

  & .btn {
    background: var(--color01);
    border: unset;
    width: 100%;
    box-shadow: -32px 0 0 var(--color02) inset;
    padding: 0.75rem 0;

    &:hover {
      box-shadow: 0 0 0 var(--color02) inset;
    }
  }
`;

export default CardComponent;
