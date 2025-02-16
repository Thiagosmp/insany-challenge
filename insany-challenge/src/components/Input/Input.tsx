import React from 'react'
import { InputWrapper, Label, StyledInput } from './styles'
import { IInputProps } from '@/types';

const Input = ({ label, type = "text", placeholder, ...props }: IInputProps) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput type={type} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

export default Input