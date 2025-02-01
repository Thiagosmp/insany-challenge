'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeaderStyled, Logo, NavLinks } from "./styles";
import Button from '../Button/Button';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 800) {
      setIsScrolled(true); 
      setIsSticky(true); 
    } else {
      setIsScrolled(false);
      setIsSticky(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <motion.header
      initial={{ backgroundColor: '#fff', position: 'relative' }}
      animate={{
        backgroundColor: isScrolled ? '#fff' : '#fff', 
        position: isSticky ? 'sticky' : 'relative', 
        top: isSticky ? 0 : 'auto', 
        zIndex: 1000, 
      }}
      transition={{ duration: 0.3 }}
    > 
      <HeaderStyled> 
        <Logo>
          <Link href="/">
            <Image src="/icons/logo.svg" alt="logo" width={44} height={36.5} />
          </Link>
          <span>Smart<span className="bold">Money</span></span>
        </Logo>
        <NavLinks>
          <Link href="/">Quem somos</Link>
          <Link href="/">Soluções</Link>
          <Link href="/">Carreira</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Suporte</Link>
          <Button>Cadastre-se</Button>
        </NavLinks>
      </HeaderStyled>
    </motion.header>
  );
}

export default Header;
