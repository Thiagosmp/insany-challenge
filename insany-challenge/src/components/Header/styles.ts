import styled from "styled-components";

export const HeaderStyled = styled.header<{ $isSticky: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: ${({ $isSticky }) => ($isSticky ? "96px" : "80px")};
  padding: 0 7rem;
  position: ${({ $isSticky }) => ($isSticky ? "sticky" : "relative")};
  top: ${({ $isSticky }) => ($isSticky ? "0" : "auto")};
  background: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.transparent : theme.colors.background)};
  position: absolute;
`;

export const Logo = styled.div<{ $isSticky: boolean }>`
  display: flex;
  align-items: center;
  gap: 13px;

  img {
    width: auto;
    height: auto;
  }

  span {
    font-size: 1.6rem;
    color: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.neutralDark50 : theme.colors.neutralDark50)};
  }

  .bold {
    font-weight: bold;
    font-size: 1.6rem;
    color: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.white : theme.colors.neutralDark400)};
  }
`;

export const NavLinks = styled.div<{ $isSticky: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.6rem;

  a {
    text-decoration: none;
    color: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.white : theme.colors.neutralDark800)};
    font-size: 0.875rem;

    &:hover {
      color: #007bff;
    }
  }

  button {
    margin-left: 1rem;
    background-color: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.white : theme.colors.primary)};
    color: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.neutralDark700 : theme.colors.white)};

    &:hover {
      background-color: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.white : theme.colors.primaryLight)};
      color: ${({ $isSticky, theme }) => ($isSticky ? theme.colors.primary : theme.colors.white)};
    }
  }
`;
