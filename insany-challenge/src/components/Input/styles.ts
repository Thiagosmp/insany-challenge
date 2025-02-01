import styled from "styled-components";


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

export const StyledInput = styled.input`
  display: flex;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color:${(props) => props.theme.colors.neutralGray01};;
  border-radius: 6px;
  font-size: 1rem;
  padding: 16px;

  &:focus {
    border:1px solid #1D63FF33;
    color: ${(props) => props.theme.colors.neutralDark400};;;
    background-color:${(props) => props.theme.colors.white};;
  }
`; 