import styled from "styled-components";

const Main = styled.main`
  & > :nth-child(2) {
    @media screen and (max-width: 575.98px) {
      padding-right: var(--bs-gutter-x, 0.75rem);
      padding-left: var(--bs-gutter-x, 0.75rem);
    }
  }

  & > :nth-child(2) > .row {
    margin-top: 2rem;
    gap: 2rem;

    @media screen and (min-width: 992px) {
      flex-wrap: unset;
    }
  }
`;

export default Main;
