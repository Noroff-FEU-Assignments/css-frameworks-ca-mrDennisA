import styled from "styled-components";
import { Col } from "react-bootstrap";

const ColComponent = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 575.98px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`;

export default ColComponent;
