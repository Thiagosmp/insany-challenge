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
  transition: background 0.4s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.1) 0%, transparent 10%, rgba(255, 255, 255, 0.1) 100%);
    transform: translateX(-50%);
    transition: width 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;