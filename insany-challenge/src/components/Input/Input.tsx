import React from 'react'
import { InputWrapper, Label, StyledInput } from './styles'

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
}

const Input = ({ label, type = "text", placeholder, ...props }: InputProps) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput type={type} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

export default Input