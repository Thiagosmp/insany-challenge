import React from 'react'
import { ButtonStyled } from './styles'
import { ButtonProps } from '@/types'

const Button = ({ children }: ButtonProps ) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}

export default Button