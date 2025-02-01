import styled from "styled-components";

export const HeaderStyled = styled.header<{ isSticky: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.isSticky ? props.theme.colors.neutralDark700 : props.theme.colors.background};
  height: 80px;
  padding: 0 7rem;
  position: ${(props) => (props.isSticky ? "sticky" : "relative")};
  top: ${(props) => (props.isSticky ? "0" : "auto")};
  z-index: 1000;
`;

export const Logo = styled.div<{ isSticky: boolean }>`
  display: flex;
  align-items: center;
  gap: 13px;

  span {
    font-size: 1.6rem;
    color: ${(props) => props.isSticky ? props.theme.colors.neutralDark50 : props.theme.colors.neutralDark50};
  }

  .bold {
    font-weight: bold;
    font-size: 1.6rem;
    color: ${(props) => props.isSticky ? props.theme.colors.white : props.theme.colors.neutralDark400};
  }
`;

export const NavLinks = styled.div<{ isSticky: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.6rem;

  a {
    text-decoration: none;
    color: ${(props) => props.isSticky ? props.theme.colors.white : props.theme.colors.neutralDark800};
    font-size: 0.875rem;

    &:hover {
      color: #007bff;
    }
  }

  button {
    margin-left: 1rem;
    background-color: ${(props) => props.isSticky ? props.theme.colors.white : props.theme.colors.primary};
    color: ${(props) => props.isSticky ? props.theme.colors.neutralDark700 : props.theme.colors.white};

    &:hover {
      background-color: ${(props) => props.isSticky ? props.theme.colors.neutralGray01 : props.theme.colors.primaryDark};
      color: ${(props) => props.isSticky ? props.theme.colors.primary : props.theme.colors.white};
      background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 80%);
    }
  }
`;
