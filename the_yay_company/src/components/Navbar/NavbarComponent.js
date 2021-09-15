import styled from "styled-components";

const Header = styled.header`
  height: 70px;

  & > .container {
    height: 100%;

    @media screen and (max-width: 991.98px) {
      max-width: unset;
      padding: unset;
    }
  }

  & .navbar {
    position: relative;
    height: 100%;
  }

  & .navbar > .container {
    @media screen and (min-width: 992px) {
      width: unset;
      padding: unset;
    }
  }

  & .navbar > .container > a {
    color: var(--color01);
    font-family: var(--font01);
    font-size: 20px;
    font-style: italic;
    font-weight: 700;
    text-decoration: none;
    margin-right: 48px;
    justify-content: space-between;

    &:hover {
      color: var(--color01);
    }

    @media screen and (min-width: 992px) {
      color: var(--color02);
    }
  }

  & .navbar-toggler {
    border: unset;
    &:focus {
      box-shadow: unset;
    }
  }

  & .navbar-collapse {
    @media screen and (max-width: 991.98px) {
      z-index: 100;
      position: absolute;
      top: 70px;
      width: 100%;

      background: var(--color03);
      box-shadow: 0 12px 12px -6px rgba(0, 0, 0, 16%);
    }
  }

  & .navbar-collapse > .container {
    margin-bottom: 2rem;
    @media screen and (min-width: 992px) {
      width: unset;
      padding: unset;
      margin: unset;
    }
  }

  & .navbar-nav {
    margin: 2rem 0;
  }

  & .nav-link {
    padding: 0.75rem 0;
    &.active {
      background: #fff;
      border-radius: unset;
    }
    @media screen and (min-width: 992px) {
      padding: 1px 1rem !important;

      &.active {
        border-radius: 4px;
      }
    }
  }

  & .nav-link > .container {
    color: #000;

    padding-left: 2rem;
    @media screen and (min-width: 992px) {
      padding: 0;
    }
  }

  & .form-control {
    border: none;
    border-radius: 4px 0 0 4px;
    color: var(--color01);

    &:hover {
      box-shadow: 0 0 0 1px var(--color01) inset;
    }
    &:focus {
      border: none;
      color: var(--color01);
      box-shadow: 0 0 0 1px var(--color01) inset;
    }
  }

  & .btn-primary {
    border: none;
    border-radius: 0 4px 4px 0;
    background: var(--color01);

    &:hover,
    :focus,
    :active {
      outline: none !important;
      border: none;
      color: var(--color01);
      box-shadow: 0 0 0 1px var(--color01) inset;
      background: #fff;
    }
    &:active {
      box-shadow: 0 0 0 1px var(--color01), 0 0 0 1px var(--color01) inset !important;
    }
  }
`;

export default Header;
