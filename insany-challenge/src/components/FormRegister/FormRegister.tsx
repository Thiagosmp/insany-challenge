'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContentFormWrapper, SectionForm } from './styles';
import Input from '../Input/Input';
import Link from 'next/link';
import Button from '../Button/Button';
import Image from 'next/image';
import { validateCNPJ } from '@/utils/validateCNPJ';


const schemaPessoa = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Número de celular inválido'),
});

const schemaEmpresa = z.object({
  cnpj: z
    .string()
    .refine((value) => validateCNPJ(value), 'CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Número de celular inválido'),
});

type PessoaFormData = z.infer<typeof schemaPessoa>;
type EmpresaFormData = z.infer<typeof schemaEmpresa>;

type FormTypes = 'pessoa' | 'empresa';

type FormDataMap = {
  pessoa: PessoaFormData;
  empresa: EmpresaFormData;
};

const FormRegister = () => {
  const [selectedValue, setSelectedValue] = useState<FormTypes>('pessoa');
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors, 
  } = useForm<FormDataMap[typeof selectedValue]>( {
    resolver: zodResolver(selectedValue === 'pessoa' ? schemaPessoa : schemaEmpresa),
  });

  const onSubmit: SubmitHandler<FormDataMap[typeof selectedValue]> = (data) => {
    alert(JSON.stringify(data).replace(/"/g, ''));
  };

  const handleRadioChange = (value: FormTypes) => {
    setSelectedValue(value);
    clearErrors(); 
  };

  return (
    <ContentFormWrapper>
      <SectionForm>
        <p>Faça parte da revolução digital!</p>
        <h2>Cadastre-se e faça parte do lançamento oficial</h2>
        <div className='contentRadioButton'>
          <label>
            <input
              type='radio'
              name='options'
              value='pessoa'
              checked={selectedValue === 'pessoa'}
              onChange={() => handleRadioChange('pessoa')}
            />
            <span>Para você</span>
          </label>

          <label>
            <input
              type='radio'
              name='options'
              value='empresa'
              checked={selectedValue === 'empresa'}
              onChange={() => handleRadioChange('empresa')}
            />
            <span>Para empresa</span>
          </label>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {selectedValue === 'pessoa' ? (
            <>
              <Input type='text' placeholder='Nome' {...register('name')} />
              {errors.name && <p>{errors.name.message?.toString()}</p>}

              <Input type='text' placeholder='E-mail' {...register('email')} />
              {errors?.email && <p>{errors.email.message?.toString()}</p>}

              <Input type='text' placeholder='Celular' {...register('phone')} />
              {errors?.phone && <p>{errors.phone.message?.toString()}</p>}
            </>
          ) : (
            <>
              <Input type='text' placeholder='CNPJ' {...register('cnpj')} />
              {errors?.cnpj && <p>{errors.cnpj.message?.toString()}</p>}

              <Input type='text' placeholder='E-mail' {...register('email')} />
              {errors?.email && <p>{errors.email.message?.toString()}</p>}

              <Input type='text' placeholder='Celular' {...register('phone')} />
              {errors?.phone && <p>{errors.phone.message?.toString()}</p>}
            </>
          )}
          <Button>Quero ser cliente</Button>
        </form>

        <span className='privacy'>
          Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da
          <Link href='/'> Política de Privacidade</Link>
        </span>

        <div className='security'>
          <Image src='/icons/icon-security.svg' alt='Segurança' width={21.5} height={24} />
          <p>Seus dados estão seguros</p>
        </div>
      </SectionForm>
    </ContentFormWrapper>
  );
};

export default FormRegister;
