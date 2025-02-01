import React from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ children }: ButtonProps ) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}

export default Button