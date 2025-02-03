import React from 'react'
import { ButtonStyled } from './styles'
import { IButtonProps } from '@/types'

const Button = ({ children }: IButtonProps ) => {
  return (
    <ButtonStyled>{children}</ButtonStyled>
  )
}

export default Button