'use client'

import React, { useState } from 'react'
import { ContentFormWrapper, SectionForm } from './styles'
import Input from '../Input/Input'
import Link from 'next/link';
import Button from '../Button/Button';
import Image from 'next/image';

const FormRegister = () => {
  const [selectedValue, setSelectedValue] = useState<string>("pessoa");

  return (
    <ContentFormWrapper>
      <SectionForm>
        <p>Faça parte da revolução digital!</p>
        <h2>Cadastre-se e faça parte do lançamento oficial</h2>
        <div className='contentRadioButton' >
          <label>
            <input
              type="radio"
              name="options"
              value="pessoa"
              checked={selectedValue === "pessoa"}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            <span>Para você</span>
          </label>

          <label>
            <input
              type="radio"
              name="options"
              value="empresa"
              checked={selectedValue === "empresa"}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
            <span>Para empresa</span>
          </label>
        </div>

        {selectedValue === "pessoa" ? (
          <form>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="E-mail" />
            <Input type="text" placeholder="Celular" />
            <Button>Quero ser cliente</Button>
          </form>
        ) :
          <form>
            <Input type="text" placeholder="CNPJ" />
            <Input type="text" placeholder="E-mail" />
            <Input type="text" placeholder="Celular" />
            <Button>Quero para minha empresa</Button>
          </form>
        }

        <span className='privacy'>
          Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da
          <Link href="/"> Política de Privacidade</Link>
        </span>

        <div className='security'>
          <Image src="/icons/icon-security.svg" alt="logo-twitter" width={21.5} height={24} />
          <p>Seus dados estão seguros</p>
        </div>
      </SectionForm>
    </ContentFormWrapper>
  )
}

export default FormRegister