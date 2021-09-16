import styled from "styled-components";

const Div = styled.div`
  & .nav-tabs {
    border: none;
  }

  & .nav-link {
    padding: 0.75rem 2.5rem;
    margin-bottom: -1px;
    color: var(--color01);
    font-size: 19px;

    &:hover {
      border-color: transparent;
    }
  }

  & .nav-link.active {
    color: var(--color02);
    border: 1px solid;
    border-radius: 10px 10px 0 0;
    border-color: var(--color04) var(--color04) #fff var(--color04);
  }

  & .tab-content {
    /* padding: 2.5rem 3rem; */
    /* background: #fff; */
  }

  & .tab-content .tab-pane {
    border-radius: 10px;
    padding: 2.5rem 3rem;
    background: #fff;
    box-shadow: 0 16px 22px rgba(0, 0, 0, 6%);
    border: 1px solid var(--color04);

    &:nth-child(1) {
      border-radius: 0 10px 10px 10px;
    }
  }

  & .tab-content .tab-pane & .row-cols-sm-auto * {
    color: #000;
  }
`;

export default Div;
