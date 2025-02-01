import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 11px 24px;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0) 80%);
  }
`;
