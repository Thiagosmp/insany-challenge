'use client'

import React from 'react'
import Image from 'next/image';
import { HeaderStyled, Logo, NavLinks } from "./styles";
import Button from '../Button/Button';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>
        <Link href="/">
          <Image src="/icons/logo.svg" alt="Logo" width={44} height={36.5} />
        </Link>
        <span>Smart<span className="bold">Money</span></span>
      </Logo>
      <NavLinks>
        <Link href="#">Quem somos</Link>
        <Link href="#">Soluções</Link>
        <Link href="#">Carreira</Link>
        <Link href="#">Contato</Link>
        <Link href="#">Suporte</Link>
        <Button>Cadastre-se</Button>
      </NavLinks>
    </HeaderStyled>
  )
}

export default Header