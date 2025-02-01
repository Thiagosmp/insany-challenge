import styled from "styled-components";

export const HeaderStyled = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "isSticky",
}) <{ isSticky: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isSticky, theme }) => (isSticky ? theme.colors.neutralDark700 : theme.colors.background)};
  height: 80px;
  padding: 0 7rem;
  position: ${({ isSticky }) => (isSticky ? "sticky" : "relative")};
  top: ${({ isSticky }) => (isSticky ? "0" : "auto")};
  z-index: 1000;
`;

export const Logo = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSticky",
}) <{ isSticky: boolean }>`
  display: flex;
  align-items: center;
  gap: 13px;

  span {
    font-size: 1.6rem;
    color: ${({ isSticky, theme }) => (isSticky ? theme.colors.neutralDark50 : theme.colors.neutralDark50)};
  }

  .bold {
    font-weight: bold;
    font-size: 1.6rem;
    color: ${({ isSticky, theme }) => (isSticky ? theme.colors.white : theme.colors.neutralDark400)};
  }
`;

export const NavLinks = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSticky",
}) <{ isSticky: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.6rem;

  a {
    text-decoration: none;
    color: ${({ isSticky, theme }) => (isSticky ? theme.colors.white : theme.colors.neutralDark800)};
    font-size: 0.875rem;

    &:hover {
      color: #007bff;
    }
  }

  button {
    margin-left: 1rem;
    background-color: ${({ isSticky, theme }) => (isSticky ? theme.colors.white : theme.colors.primary)};
    color: ${({ isSticky, theme }) => (isSticky ? theme.colors.neutralDark700 : theme.colors.white)};

    &:hover {
      background-color: ${({ isSticky, theme }) => (isSticky ? theme.colors.neutralGray01 : theme.colors.primaryDark)};
      color: ${({ isSticky, theme }) => (isSticky ? theme.colors.primary : theme.colors.white)};
      background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 80%);
    }
  }
`;
