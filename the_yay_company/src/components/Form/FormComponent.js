import styled from "styled-components";
import { Col } from "react-bootstrap";

const ColComponent = styled(Col)`
  @media screen and (max-width: 575.98px) {
    padding: unset;
  }

  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    flex: 2 0;
  }

  & form {
    background: var(--color03);
    padding: 2rem;
    border-radius: 3px;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 4%);
  }

  & .form-label {
    font-size: 20px;
  }

  & .form-control {
    line-height: 2.5rem;
    border: unset;
    color: var(--color01);

    &:hover,
    :focus {
      box-shadow: 0 0 0 1px var(--color01) inset;
    }
  }

  & .input-group-text {
    color: #fff;
    background: var(--color07);
    border: unset;
  }

  & .form-check {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & .form-check-input {
    background: var(--color01);
    min-width: 32px;
    height: 32px;
    border: unset;
    &:focus {
      box-shadow: unset;
    }
  }

  & .btn {
    width: 100%;
    padding: 0.75rem 0;
    background: var(--color02);
    border: unset;
    font-size: 22px;

    &:hover {
      background: var(--color01);
    }
  }
  & .form-check-label {
    font-size: 15px;
  }
`;

export default ColComponent;
