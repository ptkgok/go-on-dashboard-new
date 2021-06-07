import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiLogIn, BiLogInCircle } from 'react-icons/bi';
import { AuthContext } from '../../../contexts/Authentication/AuthContext';
import ButtonComponent from '../../UIKits/Button';
import InputComponent from '../../UIKits/Inputs';

import { ContainerLogin } from './styles';

const Login: React.FC = () => {

  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    console.log(data)
    await signIn(data)
  }

  return (
    <ContainerLogin onSubmit={handleSubmit(handleSignIn)}>
      <InputComponent
        {...register('email')}
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="Endereço de email"
      />

      <InputComponent 
        {...register('senha')}
        id="password"
        name="senha"
        type="password"
        required
        placeholder="Password"
      />

      <ButtonComponent height="20px" text="Avançar">
        <BiLogIn />
      </ButtonComponent>
    </ContainerLogin>
  )
}

export default Login;