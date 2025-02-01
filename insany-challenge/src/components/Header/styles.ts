import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  height: 80px;
  padding: 0 7rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  span {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.neutralDark50};
  }

  .bold {
    font-weight: bold;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.neutralDark400};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.neutralDark800};
    font-size: 0.875rem;

    &:hover {
      color: #007bff;
    }
  }

  button {
    margin-left: 1rem;
  }
`;