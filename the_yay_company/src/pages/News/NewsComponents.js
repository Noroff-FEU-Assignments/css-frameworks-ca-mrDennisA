import styled from "styled-components";

const Main = styled.main`
  & h1 {
    margin: 2.5rem 0 0;
  }

  & .pagination {
    margin: 2.5rem 0;
  }
  & .page-item.active .page-link {
    background: var(--color01);
    border-color: var(--color01);
  }

  & .page-link {
    padding: 0.875rem 1.375rem;
    color: var(--color01);
    border-color: var(--color01);

    &:hover,
    :focus {
      background: #fff;
      box-shadow: 0 0 0 1px var(--color01) inset;
    }
  }

  & .row {
    row-gap: 1.5rem;
  }
`;

export default Main;
