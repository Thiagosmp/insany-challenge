'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EmailInput, EmailWrapper, LinksAlign, ContainerFooter, LinksFooter, FooterStyled, Copy, SocialFooter, InputEmail } from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '../Header/styles'
import Button from '../Button/Button'

const emailSchema = z.object({
  email: z.string().email('Por favor, insira um e-mail válido').nonempty('E-mail é obrigatório')
})

type EmailFormData = z.infer<typeof emailSchema>

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = (data: EmailFormData) => {
    alert(JSON.stringify(data).replace(/"/g, ''))
  }

  return (
    <FooterStyled>
      <ContainerFooter>
        <InputEmail>
          <div>
            <Image src="/icons/mail.svg" alt="icon-email" width={32} height={28} />
            <h3>Fique por dentro das novidades</h3>
            <p>Cadastre seu e-mail para receber conteúdo</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <EmailWrapper>
              <EmailInput
                type="email"
                placeholder="Insira seu melhor e-mail"
                {...register('email')}
              />
              <Button>Receber Novidades</Button>
            </EmailWrapper>
            {errors.email && <p style={{color:'white'}}>{errors.email.message}</p>}
          </form>
        </InputEmail>

        <LinksAlign>
          <LinksFooter>
            <Link href="/">Quero ser cliente</Link>
            <Link href="/">Acessar conta</Link>
            <Link href="/">Dúvidas</Link>
            <Link href="/">Termos e condições</Link>
            <Link href="/">Fale conosco</Link>
          </LinksFooter>
          <SocialFooter>
            Acompanha nas redes
            <Link href="/" target='blank'>
              <Image src="/icons/icon-twitch.svg" alt="logo-twitter" width={32} height={32} />
              Twitch
            </Link>
            <Link href="/" target='blank'>
              <Image src="/icons/icon-linkedin.svg" alt="logo-linkedin" width={32} height={32} />
              Linkedin
            </Link>
            <Link href="/" target='blank'>
              <Image src="/icons/icon-instagram.svg" alt="logo-instagram" width={32} height={32} />
              Instagram
            </Link>
            <Link href="/" target='blank'>
              <Image src="/icons/icon-facebook.svg" alt="logo-facebook" width={32} height={32} />
              Facebook
            </Link>
          </SocialFooter>
        </LinksAlign>
      </ContainerFooter>

      <Copy>
        <Logo className='logoFooter' $isSticky={false}>
          <Link href="/">
            <Image src="/icons/logo.svg" alt="logo" width={44} height={36.5} />
          </Link>
          <span>
            Smart
            <span className="bold">Money</span>
          </span>
        </Logo>
        <span>
          © 2022 SmartBusiness. Todos os direitos reservados
        </span>
        <div>
          <Image src="/icons/internet.svg" alt="globo" width={18} height={18} />
          <span>Português</span>
          <Image src="/icons/arrow-blue-down.svg" alt="globo" width={12} height={12} />
        </div>
        <span className='LinkInsanyDesign'>
          Desenvolvido por <span><Link href="https://www.insany.design/pt-BR" target='blank'>
            Insany Design
          </Link></span>
        </span>
      </Copy>
    </FooterStyled>
  )
}

export default Footer
