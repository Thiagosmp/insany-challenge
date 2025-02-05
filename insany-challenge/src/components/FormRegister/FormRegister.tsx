'use client';

import React, { useState } from 'react';
import { IMaskInput } from "react-imask";
import { useForm, SubmitHandler, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContentFormWrapper, SectionForm } from './styles';
import Input from '../Input/Input';
import Link from 'next/link';
import Button from '../Button/Button';
import Image from 'next/image';
import { validateCNPJ } from '@/utils/validateCNPJ';

const schemaPerson = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(15, 'Número de celular inválido'),
});

const schemaEnterprise = z.object({
  cnpj: z.string().min(14, 'CNPJ inválido').refine(validateCNPJ, 'CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(15, 'Número de celular inválido'),
});

type PersonFormData = z.infer<typeof schemaPerson>;
type EnterpriseFormData = z.infer<typeof schemaEnterprise>;
type FormTypes = 'person' | 'enterprise';

const FormRegister = () => {
  const [selectedValue, setSelectedValue] = useState<FormTypes>('person');

  const formMethods = useForm<PersonFormData | EnterpriseFormData>({
    resolver: zodResolver(selectedValue === 'person' ? schemaPerson : schemaEnterprise),
  });

  const { register, handleSubmit, setValue, trigger, formState: { errors }, clearErrors } = formMethods;

  const personErrors = errors as FieldErrors<PersonFormData>;
  const enterpriseErrors = errors as FieldErrors<EnterpriseFormData>;

  const onSubmit: SubmitHandler<PersonFormData | EnterpriseFormData> = (data) => {
    alert(JSON.stringify(data, null, 2));
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
              value='person'
              checked={selectedValue === 'person'}
              onChange={() => handleRadioChange('person')}
            />
            <span>Para você</span>
          </label>
          <label>
            <input
              type='radio'
              name='options'
              value='enterprise'
              checked={selectedValue === 'enterprise'}
              onChange={() => handleRadioChange('enterprise')}
            />
            <span>Para empresa</span>
          </label>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {selectedValue === 'person' ? (
            <>
              <Input type='text' placeholder='Nome' {...register('name')} />
              {personErrors.name && <p>{personErrors.name.message}</p>}

              <Input type='text' placeholder='E-mail' {...register('email')} />
              {personErrors.email && <p>{personErrors.email.message}</p>}

              <IMaskInput
                mask="(00) 00000-0000"
                placeholder="Celular"
                className='inputMask'
                onAccept={(value) => {
                  setValue('phone', value);
                  trigger('phone');
                }}
              />
              {personErrors.phone && <p>{personErrors.phone.message}</p>}
            </>
          ) : (
            <>
              <IMaskInput
                mask="00.000.000/0000-00"
                placeholder="CNPJ"
                className='inputMask'
                onAccept={(value) => {
                  setValue('cnpj', value);
                  trigger('cnpj');
                }}
              />
              {enterpriseErrors.cnpj && <p>{enterpriseErrors.cnpj.message}</p>}

              <Input type='text' placeholder='E-mail' {...register('email')} />
              {enterpriseErrors.email && <p>{enterpriseErrors.email.message}</p>}

              <IMaskInput
                mask="(00) 00000-0000"
                placeholder="Celular"
                className='inputMask'
                onAccept={(value) => {
                  setValue('phone', value);
                  trigger('phone');
                }}
              />
              {enterpriseErrors.phone && <p>{enterpriseErrors.phone.message}</p>}
            </>
          )}
          <Button>Quero ser cliente</Button>
        </form>

        <span className='privacy'>
          Ao enviar seus dados, você autoriza que o SmartMoney entre em contato e declara estar ciente da
          <Link href='/'> Política de Privacidade</Link>
        </span>

        <div className='security'>
          <Image src='/icons/icon-security.svg' alt='icon segurança' width={21.5} height={24} />
          <p>Seus dados estão seguros</p>
        </div>
      </SectionForm>
    </ContentFormWrapper>
  );
};

export default FormRegister;
