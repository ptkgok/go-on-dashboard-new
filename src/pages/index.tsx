import React from 'react'
import Head from 'next/head'

import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Authentication/AuthContext'

import GoonLogo from '../assets/goonlogolight.svg'

import { Container } from '../styles/pages/Home'
import { ContainerLogin } from '../components/Form/Login/styles'
import InputComponent from '../components/UIKits/Inputs'
import { BiLogIn } from 'react-icons/bi'
import ButtonComponent from '../components/UIKits/Button'

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data) {
    await signIn(data)
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <GoonLogo />
      <ContainerLogin onSubmit={handleSubmit(handleSignIn)}>

          <InputComponent
            {...register('email')}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
          />

          <InputComponent
            {...register('senha')}
            id="password"
            name="senha"
            type="password"
            required
            placeholder="Password"
          />

           <ButtonComponent text="Avançar">
            <BiLogIn />
          </ButtonComponent>

      </ContainerLogin>
    </Container>
  )
}

export default Home