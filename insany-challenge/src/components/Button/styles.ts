import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 11px 24px;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
`;

