import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../../services/auth";
import { api } from "../../services/api";
import { AuthContextType, SignInData } from "./Types";


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<any>(null)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@gok/token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, senha }: SignInData) {

    try {
      const { token, user } = await signInRequest({
        email,
        senha
      })
  
      setCookie(undefined, '@gok/token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })
  
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
  
      setUser(user)
  
      Router.push('/dashboard'); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}