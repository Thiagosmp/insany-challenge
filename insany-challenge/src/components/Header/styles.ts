import styled from "styled-components";
import { motion } from "framer-motion";

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

  @media (max-width: 1024px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.div<{ $isSticky: boolean }>`
  display: flex;
  align-items: center;
  gap: 13px;

  a {
    text-decoration: none;
  } 

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

  @media (max-width: 768px) {
    span, .bold {
      font-size: 1.4rem;
    }
  }
`;

export const NavLinks = styled.div< { $isSticky: boolean } >`
  display: flex;
  align-items: center;
  gap: 2.6rem;

  a {
    text-decoration: none;
    color: ${ ({ $isSticky, theme }) => ($isSticky ? theme.colors.white : theme.colors.neutralDark800) };
    font-size: 0.875rem;

      &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 10001;

  div {
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 95%;
  height: 100vh;
  background: ${(props) => props.theme.colors.neutralDark800};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  padding: 5rem 2rem;
  z-index: 10000;

  a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      color: #007bff;
    }
  }

  button {
    background-color: white;
    color: ${(props) => props.theme.colors.neutralDark800};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.neutralDark700};
  opacity: 95%;
  z-index: 9999;
`;
