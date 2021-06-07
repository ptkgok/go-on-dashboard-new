import { api } from "./api"

type SignInRequestData = {
  email: string;
  senha: string;
}

export async function signInRequest(data: SignInRequestData) {
  try {

    const {data: { Usuario, token }} = await api.post('/login',data)

    console.log(data)

    return {
      token: token,
      user: Usuario
    }

  } catch (error) {
    
    console.log(error)

  }

}

export async function recoverUserInformation() {
  // signInRequest()

  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}