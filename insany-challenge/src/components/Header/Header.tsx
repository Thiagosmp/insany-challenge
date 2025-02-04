'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeaderStyled, Logo, NavLinks, Hamburger, MobileMenu, Overlay } from "./styles";
import Button from '../Button/Button';
import Link from 'next/link';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 700);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        position: isSticky ? 'sticky' : 'relative',
        top: isSticky ? 0 : 'auto',
        zIndex: 1000,
      }}
      transition={{ duration: 0.3 }}
    >
      <HeaderStyled $isSticky={!isSticky}>
        <Logo $isSticky={!isSticky}>
          <Link href="/">
            <Image src="/icons/logo.svg" alt="logo" width={44} height={36.5} />
          </Link>
          <Link href="/">
            <span>Smart<span className="bold">Money</span></span>
          </Link>
        </Logo>

        <NavLinks $isSticky={!isSticky}>
          <Link href="/">Quem somos</Link>
          <Link href="/">Soluções</Link>
          <Link href="/">Carreira</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Suporte</Link>
          <Button>Cadastre-se</Button>
        </NavLinks>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </Hamburger>
      </HeaderStyled>

      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}

      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.8, ease: 'backOut' }}
      >
        <div>
          <Logo $isSticky={!isSticky}>
            <Link href="/">
              <Image src="/icons/logo.svg" alt="logo" width={44} height={36.5} />
            </Link>
            <span>Smart<span className="bold">Money</span></span>
          </Logo>
        </div>
        <Link href="/" onClick={() => setIsOpen(false)}>Quem somos</Link>
        <Link href="/" onClick={() => setIsOpen(false)}>Soluções</Link>
        <Link href="/" onClick={() => setIsOpen(false)}>Carreira</Link>
        <Link href="/" onClick={() => setIsOpen(false)}>Contato</Link>
        <Link href="/" onClick={() => setIsOpen(false)}>Suporte</Link>
        <Button onClick={() => setIsOpen(false)}>Cadastre-se</Button>
      </MobileMenu>
    </motion.header>
  );
};

export default Header;
