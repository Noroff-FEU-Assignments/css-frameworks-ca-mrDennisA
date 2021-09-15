import styled from "styled-components";

const Footer = styled.footer`
  background: #fff;

  & .row {
    min-height: 56px;
    align-items: center;

    @media screen and (max-width: 767.98px) {
      padding: 44px 0 32px;
    }
  }

  & .row > :nth-child(1) {
    display: flex;
    gap: 24px;

    @media screen and (max-width: 767.98px) {
      justify-content: center;
      margin-bottom: 32px;
    }
  }

  & .row > :nth-child(3) {
    text-align: end;
  }
`;

export default Footer;
